import { Proyecto } from '../entities/proyecto.entity';
import { Empleado } from '../entities/empleado.entity';
import { Seguimiento } from '../entities/seguimiento.entity';
export declare class Tarea {
    id_tarea: number;
    titulo: string;
    descripcion: string;
    estado: string;
    horas_estimadas: number;
    proyecto: Proyecto;
    empleado: Empleado;
    seguimientos: Seguimiento[];
}
