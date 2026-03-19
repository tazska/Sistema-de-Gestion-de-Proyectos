// src/tarea/tarea.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Proyecto } from '../entities/proyecto.entity';
import { Empleado } from '../entities/empleado.entity';

@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id_tarea: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ default: 'pendiente' })
  estado: string; // pendiente | en_progreso | completada

  @Column({ nullable: true })
  horas_estimadas: number;

  @Column({ nullable: true })
  horas_reales: number;

  @ManyToOne(() => Proyecto, (p) => p.tareas)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @ManyToOne(() => Empleado, (e) => e.tareas)
  @JoinColumn({ name: 'id_empleado' })
  empleado: Empleado;
}