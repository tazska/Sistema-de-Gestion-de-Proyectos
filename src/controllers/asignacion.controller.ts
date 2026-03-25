import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { AsignacionService } from '../services/asignacion.service';
import { CreateAsignacionDto } from '../dto/create-asignacion.dto';
import { UpdateAsignacionDto } from '../dto/update-asignacion.dto';

@Controller('asignaciones')
export class AsignacionController {
  constructor(private readonly service: AsignacionService) {}

  @Post()
  create(@Body() dto: CreateAsignacionDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  // ⚠️ Estos dos van antes de :id
  @Get('empleado/:id')
  findByEmpleado(@Param('id') id: string) {
    return this.service.findByEmpleado(+id);
  }

  @Get('proyecto/:id')
  findByProyecto(@Param('id') id: string) {
    return this.service.findByProyecto(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAsignacionDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}