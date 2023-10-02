import { Module } from '@nestjs/common';
import { subjectRepositry } from 'src/constants/entityRepositry';
import { Subject } from './subject.entity';

@Module({
  controllers: [],
  providers: [
    {
      provide: subjectRepositry,
      useValue: Subject,
    },
  ],
})
export class SubjectModule {}
