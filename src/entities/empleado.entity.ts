import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Departamento } from '../entities/departamento.entity';
import { Cargo } from '../entities/cargo.entity';
import { Tarea } from '../entities/tarea.entity';

@Entity()
export class Empleado {
  @PrimaryGeneratedColumn()
  id_empleado: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @ManyToOne(() => Departamento, (d) => d.empleados)
  @JoinColumn({ name: 'id_departamento' })
  departamento: Departamento;

  @ManyToOne(() => Cargo, (c) => c.empleados)
  @JoinColumn({ name: 'id_cargo' })
  cargo: Cargo;

  @OneToMany(() => Tarea, (t) => t.empleado)
  tareas: Tarea[];
}