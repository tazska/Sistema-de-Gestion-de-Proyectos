// src/tarea/dto/create-tarea.dto.ts
import { IsString, IsOptional, IsNumber, IsPositive } from 'class-validator';

export class CreateTareaDto {
  @IsString()
  titulo: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  estado?: string; // pendiente | en_progreso | completada

  @IsOptional()
  @IsNumber()
  @IsPositive()
  horas_estimadas?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  horas_reales?: number;

  @IsNumber()
  id_proyecto: number;

  @IsNumber()
  id_empleado: number;
}