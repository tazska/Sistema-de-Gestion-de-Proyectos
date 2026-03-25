import { PartialType } from '@nestjs/mapped-types';
import { CreateTareaDto } from '../dto/create-tarea.dto';

export class UpdateTareaDto extends PartialType(CreateTareaDto) {}