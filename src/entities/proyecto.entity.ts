import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Departamento } from '../entities/departamento.entity';
import { Tarea } from '../entities/tarea.entity';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id_proyecto: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ type: 'date' })
  fecha_inicio: string;

  @Column({ type: 'date' })
  fecha_fin: string;

  @Column({ default: 'activo' })
  estado: string;

  @ManyToOne(() => Departamento, (d) => d.proyectos)
  @JoinColumn({ name: 'id_departamento' })
  departamento: Departamento;

  @OneToMany(() => Tarea, (t) => t.proyecto)
  tareas: Tarea[];
}