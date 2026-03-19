// src/tarea/tarea.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from '../entities/tarea.entity';
import { CreateTareaDto } from '../dto/create-tarea.dto';

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
    return this.repo.find({ relations: ['proyecto', 'empleado', 'empleado.cargo'] });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id_tarea: id },
      relations: ['proyecto', 'empleado', 'empleado.cargo'],
    });
  }

  // ⭐ Endpoint estrella: liquidación de costos
  async getCostoProyecto(id_proyecto: number) {
    const tareas = await this.repo.find({
      where: { proyecto: { id_proyecto } },
      relations: ['empleado', 'empleado.cargo'],
    });

    const detalle = tareas.map((t) => ({
      tarea: t.titulo,
      empleado: t.empleado?.nombre,
      cargo: t.empleado?.cargo?.nombre,
      horas_reales: t.horas_reales ?? 0,
      valor_hora: Number(t.empleado?.cargo?.valor_hora ?? 0),
      costo: (t.horas_reales ?? 0) * Number(t.empleado?.cargo?.valor_hora ?? 0),
    }));

    const costo_total = detalle.reduce((acc, d) => acc + d.costo, 0);

    return { id_proyecto, costo_total, detalle };
  }

  async update(id: number, dto: Partial<CreateTareaDto>) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}