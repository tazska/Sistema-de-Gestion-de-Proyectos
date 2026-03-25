import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from '../entities/proyecto.entity';
import { CreateProyectoDto } from '../dto/create-proyecto.dto';
import { UpdateProyectoDto } from '../dto/update-proyecto.dto';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly repo: Repository<Proyecto>,
  ) { }

  create(dto: CreateProyectoDto) {
    const proyecto = this.repo.create({
      ...dto,
      departamento: { id_departamento: dto.id_departamento },
    });
    return this.repo.save(proyecto);
  }

  findAll() {
    return this.repo.find({ relations: ['departamento'] });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id_proyecto: id },
      relations: ['departamento', 'tareas'],
    });
  }

  async update(id: number, dto: UpdateProyectoDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}