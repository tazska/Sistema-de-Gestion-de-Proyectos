import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';

export class UpdateDepartamentoDto extends PartialType(CreateDepartamentoDto) {}