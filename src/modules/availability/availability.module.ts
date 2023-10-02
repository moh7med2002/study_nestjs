import { Module } from '@nestjs/common';
import { availabilityRepositry } from 'src/constants/entityRepositry';
import { Availability } from './availability.entity';

@Module({
  controllers: [],
  providers: [
    {
      provide: availabilityRepositry,
      useValue: Availability,
    },
  ],
})
export class AvailabilityModule {}
