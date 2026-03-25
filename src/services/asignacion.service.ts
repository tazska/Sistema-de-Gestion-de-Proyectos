import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignacion } from '../entities/asignacion.entity';
import { CreateAsignacionDto } from '../dto/create-asignacion.dto';
import { UpdateAsignacionDto } from '../dto/update-asignacion.dto';

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private readonly repo: Repository<Asignacion>,
  ) {}

  async create(dto: CreateAsignacionDto) {
    const count = await this.repo.count({
      where: { empleado: { id_empleado: dto.id_empleado } },
    });

    if (count >= 3) {
      throw new BadRequestException(
        `El empleado ya está asignado a 3 proyectos simultáneos. No se puede agregar más.`,
      );
    }

    const existe = await this.repo.findOne({
      where: {
        empleado: { id_empleado: dto.id_empleado },
        proyecto: { id_proyecto: dto.id_proyecto },
      },
    });

    if (existe) {
      throw new BadRequestException(
        `El empleado ya está asignado a este proyecto.`,
      );
    }

    const asignacion = this.repo.create({
      fecha_asignacion: dto.fecha_asignacion,
      empleado: { id_empleado: dto.id_empleado },
      proyecto: { id_proyecto: dto.id_proyecto },
    });

    return this.repo.save(asignacion);
  }

  findAll() {
    return this.repo.find({
      relations: ['empleado', 'empleado.cargo', 'proyecto'],
    });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id_asignacion: id },
      relations: ['empleado', 'empleado.cargo', 'proyecto'],
    });
  }

  findByEmpleado(id_empleado: number) {
    return this.repo.find({
      where: { empleado: { id_empleado } },
      relations: ['proyecto', 'proyecto.departamento'],
    });
  }

  findByProyecto(id_proyecto: number) {
    return this.repo.find({
      where: { proyecto: { id_proyecto } },
      relations: ['empleado', 'empleado.cargo'],
    });
  }

  async update(id: number, dto: UpdateAsignacionDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}