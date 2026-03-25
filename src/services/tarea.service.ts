import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from '../entities/tarea.entity';
import { CreateTareaDto } from '../dto/create-tarea.dto';
import { UpdateTareaDto } from '../dto/update-tarea.dto';

@Injectable()
export class TareaService {
  constructor(
    @InjectRepository(Tarea)
    private readonly repo: Repository<Tarea>,
  ) {}

  create(dto: CreateTareaDto) {
    const tarea = this.repo.create({
      ...dto,
      proyecto: { id_proyecto: dto.id_proyecto },
      empleado: { id_empleado: dto.id_empleado },
    });
    return this.repo.save(tarea);
  }

  findAll() {
    return this.repo.find({
      relations: ['proyecto', 'empleado', 'empleado.cargo'],
    });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id_tarea: id },
      relations: ['proyecto', 'empleado', 'empleado.cargo', 'seguimientos'],
    });
  }

  async update(id: number, dto: UpdateTareaDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}