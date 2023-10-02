import {
  Column,
  Table,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Student } from '../student/student.entity';
import { Availability } from '../availability/availability.entity';
import { TimeZone } from '../timezone/timezone.entity';

@Table
export class Booking extends Model {
  @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Availability)
  @Column
  availabilityId: number;

  @BelongsTo(() => Availability)
  availability: Availability;

  @ForeignKey(() => Student)
  @Column
  studentId: number;

  @BelongsTo(() => Student)
  student: Student;

  @ForeignKey(() => TimeZone)
  @Column
  timeZoneId: number;

  @BelongsTo(() => TimeZone)
  timeZone: TimeZone;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  date: Date;

  @Column({ type: DataType.DOUBLE, allowNull: false })
  price: number;
}
