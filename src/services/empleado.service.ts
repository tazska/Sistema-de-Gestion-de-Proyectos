import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';
import { UpdateEmpleadoDto } from '../dto/update-empleado.dto';
import { Cargo } from 'src/entities/cargo.entity';

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepo: Repository<Empleado>,
    @InjectRepository(Cargo)
    private readonly cargoRepo: Repository<Cargo>,
  ) {}

  createCargo(dto: { nombre: string; valor_hora: number }) {
    return this.cargoRepo.save(this.cargoRepo.create(dto));
  }

  findAllCargos() {
    return this.cargoRepo.find();
  }

  findOneCargo(id: number) {
    return this.cargoRepo.findOne({ where: { id_cargo: id } });
  }

  async updateCargo(id: number, dto: Partial<{ nombre: string; valor_hora: number }>) {
    await this.cargoRepo.update(id, dto);
    return this.findOneCargo(id);
  }

  removeCargo(id: number) {
    return this.cargoRepo.delete(id);
  }

  create(dto: CreateEmpleadoDto) {
    const empleado = this.empleadoRepo.create({
      nombre: dto.nombre,
      email: dto.email,
      departamento: { id_departamento: dto.id_departamento },
      cargo: { id_cargo: dto.id_cargo },
    });
    return this.empleadoRepo.save(empleado);
  }

  findAll() {
    return this.empleadoRepo.find({
      relations: ['departamento', 'cargo'],
    });
  }

  findOne(id: number) {
    return this.empleadoRepo.findOne({
      where: { id_empleado: id },
      relations: ['departamento', 'cargo'],
    });
  }

  async update(id: number, dto: UpdateEmpleadoDto) {
    await this.empleadoRepo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.empleadoRepo.delete(id);
  }
}