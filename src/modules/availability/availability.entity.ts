import {
  Column,
  Table,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Teacher } from '../teacher/teacher.entity';
import { Day } from '../day/day.entity';
import { Booking } from '../booking/booking.entity';

@Table
export class Availability extends Model {
  @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Teacher)
  @Column
  teacherId: number;

  @BelongsTo(() => Teacher)
  teacher: Teacher;

  @ForeignKey(() => Day)
  @Column
  dayId: number;

  @BelongsTo(() => Day)
  day: Day;

  @Column({ type: DataType.STRING, allowNull: false })
  startHour: string;

  @Column({ type: DataType.STRING, allowNull: false })
  endHour: string;

  @HasMany(() => Booking)
  bookings: Booking[];
}
