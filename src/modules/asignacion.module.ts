import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacion } from '../entities/asignacion.entity';
import { AsignacionService } from '../services/asignacion.service';
import { AsignacionController } from '../controllers/asignacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Asignacion])],
  providers: [AsignacionService],
  controllers: [AsignacionController],
  exports: [AsignacionService],
})
export class AsignacionModule {}