
import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateCargoDto {
  @IsString()
  nombre: string;

  @IsNumber()
  @IsPositive()
  valor_hora: number;
}