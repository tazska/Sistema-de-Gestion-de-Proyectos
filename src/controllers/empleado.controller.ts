import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { EmpleadoService } from '../services/empleado.service';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';
import { UpdateEmpleadoDto } from '../dto/update-empleado.dto';

@Controller()
export class EmpleadoController {
  constructor(private readonly service: EmpleadoService) {}

  @Post('cargos')
  createCargo(@Body() dto: { nombre: string; valor_hora: number }) {
    return this.service.createCargo(dto);
  }

  @Get('cargos')
  findAllCargos() {
    return this.service.findAllCargos();
  }

  @Get('cargos/:id')
  findOneCargo(@Param('id') id: string) {
    return this.service.findOneCargo(+id);
  }

  @Patch('cargos/:id')
  updateCargo(@Param('id') id: string, @Body() dto: Partial<{ nombre: string; valor_hora: number }>) {
    return this.service.updateCargo(+id, dto);
  }

  @Delete('cargos/:id')
  removeCargo(@Param('id') id: string) {
    return this.service.removeCargo(+id);
  }

  @Post('empleados')
  create(@Body() dto: CreateEmpleadoDto) {
    return this.service.create(dto);
  }

  @Get('empleados')
  findAll() {
    return this.service.findAll();
  }

  @Get('empleados/:id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch('empleados/:id')
  update(@Param('id') id: string, @Body() dto: UpdateEmpleadoDto) {
    return this.service.update(+id, dto);
  }

  @Delete('empleados/:id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}