import { Module } from '@nestjs/common';
import { teacherSubjectRepositry } from 'src/constants/entityRepositry';
import { TeacherSubject } from './teacherSubject.entity';

@Module({
  controllers: [],
  providers: [
    {
      provide: teacherSubjectRepositry,
      useValue: TeacherSubject,
    },
  ],
})
export class TeacherSubjectModule {}
