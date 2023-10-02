import { Column, Table, Model, DataType, HasMany } from 'sequelize-typescript';
import { Availability } from '../availability/availability.entity';

@Table
export class Day extends Model {
  @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  name: string;

  @HasMany(() => Availability)
  availabilities: Availability[];
}
