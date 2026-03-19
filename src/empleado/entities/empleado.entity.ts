// src/empleado/empleado.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Departamento } from '../departamento/departamento.entity';
import { Cargo } from '../cargo/cargo.entity';
import { Tarea } from '../tarea/tarea.entity';

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