import { PartialType } from '@nestjs/mapped-types';
import { CreateCargoDto } from '../dto/create-cargo.dto';

export class UpdateCargoDto extends PartialType(CreateCargoDto) {}