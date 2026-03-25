import { Repository } from 'typeorm';
import { Seguimiento } from '../entities/seguimiento.entity';
import { CreateSeguimientoDto } from '../dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from '../dto/update-seguimiento.dto';
export declare class SeguimientoService {
    private readonly repo;
    constructor(repo: Repository<Seguimiento>);
    create(dto: CreateSeguimientoDto): Promise<Seguimiento>;
    findAll(): Promise<Seguimiento[]>;
    findOne(id: number): Promise<Seguimiento | null>;
    update(id: number, dto: UpdateSeguimientoDto): Promise<Seguimiento | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    getCostoProyecto(id_proyecto: number): Promise<{
        id_proyecto: number;
        nombre_proyecto: string;
        costo_total: number;
        total_registros: number;
        resumen_por_empleado: unknown[];
        detalle: {
            id_seguimiento: number;
            fecha_registro: string;
            tarea: string;
            empleado: string;
            cargo: string;
            valor_hora: number;
            horas_trabajadas: number;
            costo: number;
            observacion: string;
        }[];
    }>;
}
