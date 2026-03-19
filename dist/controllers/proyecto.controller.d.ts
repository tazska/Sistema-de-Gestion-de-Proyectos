import { ProyectoService } from '../services/proyecto.service';
import { CreateProyectoDto } from '../dto/create-proyecto.dto';
export declare class ProyectoController {
    private readonly service;
    constructor(service: ProyectoService);
    create(dto: CreateProyectoDto): Promise<import("../entities/proyecto.entity").Proyecto>;
    findAll(): Promise<import("../entities/proyecto.entity").Proyecto[]>;
    findOne(id: string): Promise<import("../entities/proyecto.entity").Proyecto | null>;
    update(id: string, dto: Partial<CreateProyectoDto>): Promise<import("../entities/proyecto.entity").Proyecto | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
