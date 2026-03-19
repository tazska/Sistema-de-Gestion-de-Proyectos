// src/tarea/tarea.controller.ts
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { TareaService } from '../services/tarea.service';
import { CreateTareaDto } from '../dto/create-tarea.dto';

@Controller('tareas')
export class TareaController {
  constructor(private readonly service: TareaService) {}

  @Post()
  create(@Body() dto: CreateTareaDto) { return this.service.create(dto); }

  @Get()
  findAll() { return this.service.findAll(); }

  @Get('proyecto/:id/costo')         // ⭐ debe ir ANTES de :id
  getCosto(@Param('id') id: string) { return this.service.getCostoProyecto(+id); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.service.findOne(+id); }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateTareaDto>) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(+id); }
}