import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoDto } from '../dto/create-proyecto.dto';

export class UpdateProyectoDto extends PartialType(CreateProyectoDto) {}