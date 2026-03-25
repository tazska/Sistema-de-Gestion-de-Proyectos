import { SeguimientoService } from '../services/seguimiento.service';
import { CreateSeguimientoDto } from '../dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from '../dto/update-seguimiento.dto';
export declare class SeguimientoController {
    private readonly service;
    constructor(service: SeguimientoService);
    create(dto: CreateSeguimientoDto): Promise<import("../entities/seguimiento.entity").Seguimiento>;
    findAll(): Promise<import("../entities/seguimiento.entity").Seguimiento[]>;
    getCostoProyecto(id: string): Promise<{
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
    findOne(id: string): Promise<import("../entities/seguimiento.entity").Seguimiento | null>;
    update(id: string, dto: UpdateSeguimientoDto): Promise<import("../entities/seguimiento.entity").Seguimiento | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
