import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';
import { Proyecto } from  '../entities/proyecto.entity';

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn()
  id_departamento: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @OneToMany(() => Empleado, (e) => e.departamento)
  empleados: Empleado[];

  @OneToMany(() => Proyecto, (p) => p.departamento)
  proyectos: Proyecto[];
}