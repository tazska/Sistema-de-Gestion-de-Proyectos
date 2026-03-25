import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from '../entities/empleado.entity';
import { EmpleadoService } from '../services/empleado.service';
import { EmpleadoController } from '../controllers/empleado.controller';
import { Cargo } from 'src/entities/cargo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado, Cargo])],
  providers: [EmpleadoService],
  controllers: [EmpleadoController],
  exports: [EmpleadoService],
})
export class EmpleadoModule { }