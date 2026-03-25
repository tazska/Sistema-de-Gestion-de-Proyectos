import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguimiento } from '../entities/seguimiento.entity';
import { SeguimientoService } from '../services/seguimiento.service';
import { SeguimientoController } from '../controllers/seguimiento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Seguimiento])],
  providers: [SeguimientoService],
  controllers: [SeguimientoController],
  exports: [SeguimientoService],
})
export class SeguimientoModule {}