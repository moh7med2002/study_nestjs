import {
  Column,
  Table,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Teacher } from '../teacher/teacher.entity';

@Table
export class BaiedBalance extends Model {
  @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Teacher)
  @Column
  teacherId: number;

  @BelongsTo(() => Teacher)
  teacher: Teacher;

  @Column({ type: DataType.DOUBLE, allowNull: false })
  price: number;
}
