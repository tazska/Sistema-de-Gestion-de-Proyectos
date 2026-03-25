import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Proyecto } from '../entities/proyecto.entity';
import { Empleado } from '../entities/empleado.entity';
import { Seguimiento } from '../entities/seguimiento.entity';

@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id_tarea: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ default: 'pendiente' })
  estado: string;

  @Column({ nullable: true })
  horas_estimadas: number;  

  @ManyToOne(() => Proyecto, (p) => p.tareas)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @ManyToOne(() => Empleado, (e) => e.tareas)
  @JoinColumn({ name: 'id_empleado' })
  empleado: Empleado;

  @OneToMany(() => Seguimiento, (s) => s.tarea)
  seguimientos: Seguimiento[];
}
  