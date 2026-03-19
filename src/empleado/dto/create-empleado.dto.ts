// src/empleado/dto/create-empleado.dto.ts
import { IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsNumber()
  id_departamento: number;

  @IsNumber()
  id_cargo: number;
}