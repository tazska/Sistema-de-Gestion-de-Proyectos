import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from '../entities/departamento.entity';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';
import { UpdateDepartamentoDto } from '../dto/update-departamento.dto';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly repo: Repository<Departamento>,
  ) { }

  create(dto: CreateDepartamentoDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_departamento: id } });
  }

  async update(id: number, dto: UpdateDepartamentoDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  findEmpleados(id: number) {
    return this.repo.findOne({
      where: { id_departamento: id },
      relations: ['empleados', 'empleados.cargo'],
    });
  }
}