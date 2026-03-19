// src/empleado/empleado.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private readonly repo: Repository<Empleado>,
  ) {}

  create(dto: CreateEmpleadoDto) {
    const empleado = this.repo.create({
      nombre: dto.nombre,
      email: dto.email,
      departamento: { id_departamento: dto.id_departamento },
      cargo: { id_cargo: dto.id_cargo },
    });
    return this.repo.save(empleado);
  }

  findAll() {
    return this.repo.find({ relations: ['departamento', 'cargo'] });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id_empleado: id },
      relations: ['departamento', 'cargo'],
    });
  }

  async update(id: number, dto: Partial<CreateEmpleadoDto>) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}