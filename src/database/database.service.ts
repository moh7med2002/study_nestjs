import { Admin } from 'src/modules/admin/admin.entity';
import { sequelize } from './connection';
import { Level } from 'src/modules/level/level.entity';
import { Subject } from 'src/modules/subject/subject.entity';
import { TimeZone } from 'src/modules/timezone/timezone.entity';
import { Day } from 'src/modules/day/day.entity';
import { Student } from 'src/modules/student/student.entity';
import { Teacher } from 'src/modules/teacher/teacher.entity';
import { TeacherSubject } from 'src/modules/teacherSubject/teacherSubject.entity';
import { Availability } from 'src/modules/availability/availability.entity';
import { Booking } from 'src/modules/booking/booking.entity';
import { BaiedBalance } from 'src/modules/baiedBalance/baiedBalance.entity';
import { timezones } from 'src/constants/timezones';
import { days } from 'src/constants/days';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      sequelize.addModels([
        Admin,
        Level,
        Subject,
        TimeZone,
        Day,
        Student,
        Teacher,
        TeacherSubject,
        Availability,
        Booking,
        BaiedBalance,
      ]);
      await sequelize.sync({ alter: false });

      const createPromises = [];

      const existingTimeZones = await TimeZone.findAll();
      if (existingTimeZones.length === 0) {
        createPromises.push(
          TimeZone.bulkCreate(timezones).then(() => {
            console.log('Timezones created successfully.');
          }),
        );
      } else {
        console.log('Timezones already exist. No need to create.');
      }
      const existingDays = await Day.findAll();
      if (existingDays.length === 0) {
        createPromises.push(
          Day.bulkCreate(days).then(() => {
            console.log('Days created successfully.');
          }),
        );
      } else {
        console.log('Days already exist. No need to create.');
      }

      // Use Promise.all to execute all creation promises concurrently
      await Promise.all(createPromises);
      return sequelize;
    },
  },
];
