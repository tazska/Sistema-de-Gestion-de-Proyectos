// src/proyecto/proyecto.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from '../entities/proyecto.entity';
import { ProyectoService } from '../services/proyecto.service';
import { ProyectoController } from '../controllers/proyecto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto])],
  providers: [ProyectoService],
  controllers: [ProyectoController],
  exports: [ProyectoService],
})
export class ProyectoModule {}