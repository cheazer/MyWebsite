import { ConfigService } from '@nestjs/config';
import { ContactDto } from './contact.dto';
import { ContactService } from './contact.service';

const dto = (overrides: Partial<ContactDto> = {}): ContactDto => ({
  name: 'Test Person',
  email: 'test@example.com',
  message: 'This is a long enough message to pass validation.',
  ...overrides,
});

describe('ContactService', () => {
  it('reports not delivered when no mail provider is configured', async () => {
    const service = new ContactService(new ConfigService());
    const result = await service.submit(dto());
    expect(result.delivered).toBe(false);
  });

  it('swallows honeypot submissions without sending anything', async () => {
    const service = new ContactService(new ConfigService());
    const result = await service.submit(dto({ company: 'spam co' }));
    expect(result.delivered).toBe(true);
  });

  it('stamps every submission with a timestamp', async () => {
    const service = new ContactService(new ConfigService());
    const result = await service.submit(dto());
    expect(Number.isNaN(Date.parse(result.receivedAt))).toBe(false);
  });
});
