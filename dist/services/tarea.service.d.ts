import { Repository } from 'typeorm';
import { Tarea } from '../entities/tarea.entity';
import { CreateTareaDto } from '../dto/create-tarea.dto';
export declare class TareaService {
    private readonly repo;
    constructor(repo: Repository<Tarea>);
    create(dto: CreateTareaDto): Promise<Tarea>;
    findAll(): Promise<Tarea[]>;
    findOne(id: number): Promise<Tarea | null>;
    getCostoProyecto(id_proyecto: number): Promise<{
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
    update(id: number, dto: Partial<CreateTareaDto>): Promise<Tarea | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
