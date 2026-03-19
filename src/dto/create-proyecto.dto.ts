// src/proyecto/dto/create-proyecto.dto.ts
import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateProyectoDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsDateString()
  fecha_inicio: string;

  @IsDateString()
  fecha_fin: string;

  @IsNumber()
  id_departamento: number;
}