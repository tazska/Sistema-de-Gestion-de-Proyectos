// src/empleado/empleado.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from '../entities/empleado.entity';
import { EmpleadoService } from '../services/empleado.service';
import { EmpleadoController } from '../controllers/empleado.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado])],
  providers: [EmpleadoService],
  controllers: [EmpleadoController],
  exports: [EmpleadoService],
})
export class EmpleadoModule {}