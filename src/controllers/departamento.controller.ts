// src/departamento/departamento.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DepartamentoService } from '../services/departamento.service';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';

@Controller('departamentos')
export class DepartamentoController {
  constructor(private readonly service: DepartamentoService) {}

  @Post()
  create(@Body() dto: CreateDepartamentoDto) {
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

  @Get(':id/empleados')
  findEmpleados(@Param('id') id: string) {
    return this.service.findEmpleados(+id);
  }
}