import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MulterModule } from '@nestjs/platform-express';
import { CustomStorage } from './common/util/custom.storage';
import { JwtModule } from '@nestjs/jwt';
import { GatewayModule } from './geteway/geteway.module';
import { DatabaseModule } from './database/database.module';
import { AdminModule } from './modules/admin/admin.module';
import { LevelModule } from './modules/level/level.module';
import { SubjectModule } from './modules/subject/subject.module';
import { TimeZoneModule } from './modules/timezone/timezone.module';
import { DayModule } from './modules/day/day.module';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { TeacherSubjectModule } from './modules/teacherSubject/teacherSubject.module';
import { AvailabilityModule } from './modules/availability/availability.module';
import { BookingModule } from './modules/booking/booking.module';
import { BaiedBalanceModule } from './modules/baiedBalance/baiedBalance.module';

@Module({
  imports: [
    JwtModule.register({ global: true, secret: 'token' }),
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: CustomStorage.storage,
      }),
    }),
    DatabaseModule,
    GatewayModule,
    AdminModule,
    LevelModule,
    SubjectModule,
    TimeZoneModule,
    DayModule,
    StudentModule,
    TeacherModule,
    TeacherSubjectModule,
    AvailabilityModule,
    BookingModule,
    BaiedBalanceModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
