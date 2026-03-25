import { AsignacionService } from '../services/asignacion.service';
import { CreateAsignacionDto } from '../dto/create-asignacion.dto';
import { UpdateAsignacionDto } from '../dto/update-asignacion.dto';
export declare class AsignacionController {
    private readonly service;
    constructor(service: AsignacionService);
    create(dto: CreateAsignacionDto): Promise<import("../entities/asignacion.entity").Asignacion>;
    findAll(): Promise<import("../entities/asignacion.entity").Asignacion[]>;
    findByEmpleado(id: string): Promise<import("../entities/asignacion.entity").Asignacion[]>;
    findByProyecto(id: string): Promise<import("../entities/asignacion.entity").Asignacion[]>;
    findOne(id: string): Promise<import("../entities/asignacion.entity").Asignacion | null>;
    update(id: string, dto: UpdateAsignacionDto): Promise<import("../entities/asignacion.entity").Asignacion | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
