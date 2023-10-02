import { Module } from '@nestjs/common';
import { timezoneRepositry } from 'src/constants/entityRepositry';
import { TimeZone } from './timezone.entity';

@Module({
  controllers: [],
  providers: [
    {
      provide: timezoneRepositry,
      useValue: TimeZone,
    },
  ],
})
export class TimeZoneModule {}
