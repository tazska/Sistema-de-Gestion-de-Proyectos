import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';

export class UpdateEmpleadoDto extends PartialType(CreateEmpleadoDto) {}