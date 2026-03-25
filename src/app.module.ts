import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { DepartamentoModule } from './modules/departamento.module';
import { EmpleadoModule } from './modules/empleado.module';
import { ProyectoModule } from './modules/proyecto.module';
import { TareaModule } from './modules/tarea.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    DepartamentoModule,
    EmpleadoModule,
    ProyectoModule,
    TareaModule,
  ],
})
export class AppModule {}