import {
  Table,
  Column,
  DataType,
  BelongsToMany,
  HasMany,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { TeacherSubject } from '../teacherSubject/teacherSubject.entity';
import { Subject } from '../subject/subject.entity';
import { Availability } from '../availability/availability.entity';
import { BaiedBalance } from '../baiedBalance/baiedBalance.entity';
import { TimeZone } from '../timezone/timezone.entity';
import { GenderEnum } from 'src/constants/enums';

@Table
export class Teacher extends Model {
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

  @Column({ type: DataType.TEXT, allowNull: false })
  bio: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  pricePersHour: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  accepted: boolean;

  @BelongsToMany(() => Subject, () => TeacherSubject)
  subjects: Subject[];

  @HasMany(() => Availability)
  availabilities: Availability[];

  @HasMany(() => BaiedBalance)
  payments: BaiedBalance[];
}
