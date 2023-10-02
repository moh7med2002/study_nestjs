import { Column, Table, Model, DataType, HasMany } from 'sequelize-typescript';
import { Subject } from '../subject/subject.entity';
import { Student } from '../student/student.entity';

@Table
export class Level extends Model {
  @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  title: string;

  @HasMany(() => Subject)
  subjects: Subject[];

  @HasMany(() => Student)
  students: Student[];
}
