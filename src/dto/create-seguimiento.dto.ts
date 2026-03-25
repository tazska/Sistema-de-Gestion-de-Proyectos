import { IsNumber, IsString, IsOptional, IsPositive, IsDateString } from 'class-validator';

export class CreateSeguimientoDto {
  @IsNumber()
  @IsPositive()
  horas_trabajadas: number;

  @IsDateString()
  fecha_registro: string;

  @IsOptional()
  @IsString()
  observacion?: string;

  @IsNumber()
  id_tarea: number;

  @IsNumber()
  id_empleado: number;
}