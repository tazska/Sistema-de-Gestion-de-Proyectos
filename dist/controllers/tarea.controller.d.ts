import { TareaService } from '../services/tarea.service';
import { CreateTareaDto } from '../dto/create-tarea.dto';
import { UpdateTareaDto } from '../dto/update-tarea.dto';
export declare class TareaController {
    private readonly service;
    constructor(service: TareaService);
    create(dto: CreateTareaDto): Promise<import("../entities/tarea.entity").Tarea>;
    findAll(): Promise<import("../entities/tarea.entity").Tarea[]>;
    findOne(id: string): Promise<import("../entities/tarea.entity").Tarea | null>;
    update(id: string, dto: UpdateTareaDto): Promise<import("../entities/tarea.entity").Tarea | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
