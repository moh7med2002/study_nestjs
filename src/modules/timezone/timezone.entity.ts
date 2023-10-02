import { Column, Table, Model, DataType, HasMany } from 'sequelize-typescript';
import { Booking } from '../booking/booking.entity';
import { Student } from '../student/student.entity';
import { Teacher } from '../teacher/teacher.entity';

@Table
export class TimeZone extends Model {
  @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  name: string;

  @Column({ type: DataType.DOUBLE, allowNull: false })
  latitude: number;

  @Column({ type: DataType.DOUBLE, allowNull: false })
  longitude: number;

  @Column({ type: DataType.DOUBLE, allowNull: false })
  offset: number;

  @HasMany(() => Student)
  students: Student[];

  @HasMany(() => Teacher)
  teachers: Teacher[];

  @HasMany(() => Booking)
  bookings: Booking[];
}
