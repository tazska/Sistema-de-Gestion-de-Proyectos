
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Empleado } from '../empleado/empleado.entity';

@Entity()
export class Cargo {
  @PrimaryGeneratedColumn()
  id_cargo: number;

  @Column()
  nombre: string; // Junior | Senior | Lead

  @Column('decimal', { precision: 10, scale: 2 })
  valor_hora: number;

  @OneToMany(() => Empleado, (e) => e.cargo)
  empleados: Empleado[];
}