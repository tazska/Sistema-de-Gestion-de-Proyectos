import { TareaService } from '../services/tarea.service';
import { CreateTareaDto } from '../dto/create-tarea.dto';
export declare class TareaController {
    private readonly service;
    constructor(service: TareaService);
    create(dto: CreateTareaDto): Promise<import("../entities/tarea.entity").Tarea>;
    findAll(): Promise<import("../entities/tarea.entity").Tarea[]>;
    getCosto(id: string): Promise<{
        id_proyecto: number;
        costo_total: number;
        detalle: {
            tarea: string;
            empleado: string;
            cargo: string;
            horas_reales: number;
            valor_hora: number;
            costo: number;
        }[];
    }>;
    findOne(id: string): Promise<import("../entities/tarea.entity").Tarea | null>;
    update(id: string, dto: Partial<CreateTareaDto>): Promise<import("../entities/tarea.entity").Tarea | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
