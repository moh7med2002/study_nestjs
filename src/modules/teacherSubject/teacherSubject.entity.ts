import {
  Column,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Teacher } from '../teacher/teacher.entity';
import { Subject } from '../subject/subject.entity';

@Table
export class TeacherSubject extends Model {
  @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Teacher)
  @Column
  teacherId: number;

  @BelongsTo(() => Teacher)
  teacher: Teacher;

  @ForeignKey(() => Subject)
  @Column
  subjectId: number;

  @BelongsTo(() => Subject)
  subject: Subject;
}
