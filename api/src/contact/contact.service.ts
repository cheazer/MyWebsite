import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ContactDto } from './contact.dto';

export type ContactResult = {
  delivered: boolean;
  receivedAt: string;
};

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(private readonly config: ConfigService) {}

  async submit(dto: ContactDto): Promise<ContactResult> {
    // Honeypot filled means a bot. Return success so it learns nothing.
    if (dto.company && dto.company.trim().length > 0) {
      this.logger.warn('Contact submission rejected by honeypot');
      return { delivered: true, receivedAt: new Date().toISOString() };
    }

    const apiKey = this.config.get<string>('RESEND_API_KEY');
    const to = this.config.get<string>('CONTACT_TO_EMAIL');

    if (!apiKey || !to) {
      // No mail provider configured yet. Log it so nothing is silently lost.
      this.logger.log(`Contact message from ${dto.email}: ${dto.message.slice(0, 120)}`);
      return { delivered: false, receivedAt: new Date().toISOString() };
    }

    await this.sendEmail(dto, apiKey, to);
    return { delivered: true, receivedAt: new Date().toISOString() };
  }

  private async sendEmail(dto: ContactDto, apiKey: string, to: string): Promise<void> {
    const from = this.config.get<string>('CONTACT_FROM_EMAIL') ?? 'onboarding@resend.dev';

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: dto.email,
          subject: `Portfolio message from ${dto.name}`,
          text: `${dto.name} <${dto.email}>\n\n${dto.message}`,
        }),
      });

      if (!response.ok) {
        this.logger.error(`Resend responded ${response.status}`);
        throw new HttpException('Could not send the message', HttpStatus.BAD_GATEWAY);
      }
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(`Mail provider unreachable: ${String(error)}`);
      throw new HttpException('Could not send the message', HttpStatus.BAD_GATEWAY);
    }
  }
}
