import { IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateAsignacionDto {
  @IsNumber()
  id_empleado: number;

  @IsNumber()
  id_proyecto: number;

  @IsOptional()
  @IsDateString()
  fecha_asignacion?: string;
}