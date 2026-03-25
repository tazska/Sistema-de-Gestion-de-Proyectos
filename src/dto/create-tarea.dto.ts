import { IsString, IsOptional, IsNumber, IsPositive } from 'class-validator';

export class CreateTareaDto {
  @IsString()
  titulo: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  horas_estimadas?: number; 

  @IsNumber()
  id_proyecto: number;

  @IsNumber()
  id_empleado: number;
}