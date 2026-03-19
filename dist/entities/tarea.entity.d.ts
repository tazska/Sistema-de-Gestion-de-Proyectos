import { Proyecto } from '../entities/proyecto.entity';
import { Empleado } from '../entities/empleado.entity';
export declare class Tarea {
    id_tarea: number;
    titulo: string;
    descripcion: string;
    estado: string;
    horas_estimadas: number;
    horas_reales: number;
    proyecto: Proyecto;
    empleado: Empleado;
}
