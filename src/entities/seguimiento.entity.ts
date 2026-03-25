import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { Tarea } from '../entities/tarea.entity';
import { Empleado } from '../entities/empleado.entity';

@Entity()
export class Seguimiento {
  @PrimaryGeneratedColumn()
  id_seguimiento: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  horas_trabajadas: number;

  @Column({ type: 'date' })
  fecha_registro: string;

  @Column({ nullable: true })
  observacion: string;

  @ManyToOne(() => Tarea, (t) => t.seguimientos)
  @JoinColumn({ name: 'id_tarea' })
  tarea: Tarea;

  @ManyToOne(() => Empleado)
  @JoinColumn({ name: 'id_empleado' })
  empleado: Empleado;
}