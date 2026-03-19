import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { CargoModule } from './cargo/cargo.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { TareaModule } from './tarea/tarea.module';
import { CargoModule } from './cargo/cargo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    DepartamentoModule,
    CargoModule,
    EmpleadoModule,
    ProyectoModule,
    TareaModule,
  ],
})
export class AppModule {}