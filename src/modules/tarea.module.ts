import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from '../entities/tarea.entity';
import { TareaService } from '../services/tarea.service';
import { TareaController } from '../controllers/tarea.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tarea])],
  providers: [TareaService],
  controllers: [TareaController],
})
export class TareaModule {}