import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';
import { Proyecto } from '../entities/proyecto.entity';

@Entity()
export class Asignacion {
  @PrimaryGeneratedColumn()
  id_asignacion: number;

  @Column({
    type: 'timestamp',
    name: 'fecha_asignacion',
    nullable: true
  })
  fecha_asignacion: Date;
  
  @BeforeInsert()
  setFechaAsignacion() {
    this.fecha_asignacion = new Date();
  }

  @ManyToOne(() => Empleado)
  @JoinColumn({ name: 'id_empleado' })
  empleado: Empleado;

  @ManyToOne(() => Proyecto)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;
}