import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { SeguimientoService } from '../services/seguimiento.service';
import { CreateSeguimientoDto } from '../dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from '../dto/update-seguimiento.dto';

@Controller('seguimientos')
export class SeguimientoController {
  constructor(private readonly service: SeguimientoService) {}

  @Post()
  create(@Body() dto: CreateSeguimientoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  // ⭐ debe ir antes de :id
  @Get('proyecto/:id/costo')
  getCostoProyecto(@Param('id') id: string) {
    return this.service.getCostoProyecto(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSeguimientoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}