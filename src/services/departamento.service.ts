// src/departamento/departamento.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from '../entities/departamento.entity';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly repo: Repository<Departamento>,
  ) {}

  create(dto: CreateDepartamentoDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_departamento: id } });
  }

  findEmpleados(id: number) {
    return this.repo.findOne({
      where: { id_departamento: id },
      relations: ['empleados', 'empleados.cargo'],
    });
  }
}