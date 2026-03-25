import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seguimiento } from '../entities/seguimiento.entity';
import { CreateSeguimientoDto } from '../dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from '../dto/update-seguimiento.dto';

@Injectable()
export class SeguimientoService {
  constructor(
    @InjectRepository(Seguimiento)
    private readonly repo: Repository<Seguimiento>,
  ) {}

  create(dto: CreateSeguimientoDto) {
    const seguimiento = this.repo.create({
      ...dto,
      tarea: { id_tarea: dto.id_tarea },
      empleado: { id_empleado: dto.id_empleado },
    });
    return this.repo.save(seguimiento);
  }

  findAll() {
    return this.repo.find({
      relations: ['tarea', 'empleado', 'empleado.cargo'],
    });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id_seguimiento: id },
      relations: ['tarea', 'empleado', 'empleado.cargo'],
    });
  }

  async update(id: number, dto: UpdateSeguimientoDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  async getCostoProyecto(id_proyecto: number) {
    const seguimientos = await this.repo.find({
      where: { tarea: { proyecto: { id_proyecto } } },
      relations: ['tarea', 'tarea.proyecto', 'empleado', 'empleado.cargo'],
    });

    if (!seguimientos.length) {
      throw new NotFoundException(
        `No se encontraron registros para el proyecto ${id_proyecto}`,
      );
    }

    const detalle = seguimientos.map((s) => {
      const horas = Number(s.horas_trabajadas ?? 0);
      const valor_hora = Number(s.empleado?.cargo?.valor_hora ?? 0);
      const costo = horas * valor_hora;

      return {
        id_seguimiento: s.id_seguimiento,
        fecha_registro: s.fecha_registro,
        tarea: s.tarea?.titulo,
        empleado: s.empleado?.nombre,
        cargo: s.empleado?.cargo?.nombre,
        valor_hora,
        horas_trabajadas: horas,
        costo,
        observacion: s.observacion,
      };
    });

    const por_empleado = detalle.reduce((acc, d) => {
      const key = d.empleado;
      if (!acc[key]) {
        acc[key] = {
          empleado: d.empleado,
          cargo: d.cargo,
          valor_hora: d.valor_hora,
          total_horas: 0,
          total_costo: 0,
        };
      }
      acc[key].total_horas += d.horas_trabajadas;
      acc[key].total_costo += d.costo;
      return acc;
    }, {});

    const costo_total = detalle.reduce((acc, d) => acc + d.costo, 0);

    return {
      id_proyecto,
      nombre_proyecto: seguimientos[0].tarea?.proyecto?.nombre,
      costo_total,
      total_registros: seguimientos.length,
      resumen_por_empleado: Object.values(por_empleado),
      detalle,
    };
  }
}