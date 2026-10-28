import { Controller, Get } from '@nestjs/common';

type Health = {
  status: 'ok';
  uptime: number;
};

/** Platform health checks hit this. Cheap, no external calls. */
@Controller('health')
export class HealthController {
  @Get()
  check(): Health {
    return { status: 'ok', uptime: Math.round(process.uptime()) };
  }
}
