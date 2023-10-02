import {
  Column,
  Table,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Level } from '../level/level.entity';
import { Teacher } from '../teacher/teacher.entity';
import { TeacherSubject } from '../teacherSubject/teacherSubject.entity';

@Table
export class Subject extends Model {
  @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  title: string;

  @ForeignKey(() => Level)
  @Column
  levelId: number;

  @BelongsTo(() => Level)
  level: Level;

  @BelongsToMany(() => Teacher, () => TeacherSubject)
  teachers: Teacher[];
}
