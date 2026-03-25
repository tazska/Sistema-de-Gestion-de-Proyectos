import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { DepartamentoService } from '../services/departamento.service';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';
import { UpdateDepartamentoDto } from '../dto/update-departamento.dto';

@Controller('departamentos')
export class DepartamentoController {
  constructor(private readonly service: DepartamentoService) { }

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDepartamentoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  @Get(':id/empleados')
  findEmpleados(@Param('id') id: string) {
    return this.service.findEmpleados(+id);
  }
}