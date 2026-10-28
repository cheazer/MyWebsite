import { Body, Controller, Post } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ContactDto } from './contact.dto';
import { ContactResult, ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  /** Tighter than the global limit: three messages an hour per IP is plenty. */
  @Throttle({ default: { ttl: 3_600_000, limit: 3 } })
  @Post()
  submit(@Body() dto: ContactDto): Promise<ContactResult> {
    return this.contactService.submit(dto);
  }
}
