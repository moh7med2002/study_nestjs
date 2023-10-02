import { Module } from '@nestjs/common';
import { levelRepositry } from 'src/constants/entityRepositry';
import { Level } from './level.entity';

@Module({
  controllers: [],
  providers: [
    {
      provide: levelRepositry,
      useValue: Level,
    },
  ],
})
export class LevelModule {}
