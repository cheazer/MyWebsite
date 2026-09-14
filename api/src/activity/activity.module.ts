import { Module } from '@nestjs/common';
import { CacheService } from '../common/cache.service';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService, CacheService],
})
export class ActivityModule {}
