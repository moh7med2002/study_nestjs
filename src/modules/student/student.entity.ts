import {
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
  Column,
  Model,
  DataType,
} from 'sequelize-typescript';
import { Level } from '../level/level.entity';
import { Booking } from '../booking/booking.entity';
import { TimeZone } from '../timezone/timezone.entity';
import { GenderEnum } from 'src/constants/enums';

@Table
export class Student extends Model {
  @Column({ allowNull: false, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => TimeZone)
  @Column
  timezoneId: number;

  @BelongsTo(() => TimeZone)
  timeZone: TimeZone;

  @Column({
    type: DataType.ENUM(GenderEnum.MALE, GenderEnum.FEMALE),
    defaultValue: GenderEnum.MALE,
  })
  gender: GenderEnum;

  @ForeignKey(() => Level)
  levelId: number;

  @BelongsTo(() => Level)
  level: Level;

  @HasMany(() => Booking)
  bookings: Booking[];
}
