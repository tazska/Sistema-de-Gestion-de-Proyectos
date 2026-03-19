// src/proyecto/proyecto.controller.ts
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { CreateProyectoDto } from './dto/create-proyecto.dto';

@Controller('proyectos')
export class ProyectoController {
  constructor(private readonly service: ProyectoService) {}

  @Post()
  create(@Body() dto: CreateProyectoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateProyectoDto>) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}