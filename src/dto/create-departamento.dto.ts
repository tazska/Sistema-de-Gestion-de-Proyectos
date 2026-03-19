// src/departamento/dto/create-departamento.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class CreateDepartamentoDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}