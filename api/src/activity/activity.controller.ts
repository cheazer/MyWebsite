import { Controller, Get } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivitySummary } from './activity.types';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  getActivity(): Promise<ActivitySummary> {
    return this.activityService.getActivity();
  }
}
