import { Module } from '@nestjs/common';
import { teacherRepositry } from 'src/constants/entityRepositry';
import { Teacher } from './teacher.entity';

@Module({
  controllers: [],
  providers: [
    {
      provide: teacherRepositry,
      useValue: Teacher,
    },
  ],
})
export class TeacherModule {}
