import { Empleado } from '../entities/empleado.entity';
import { Proyecto } from '../entities/proyecto.entity';
export declare class Asignacion {
    id_asignacion: number;
    fecha_asignacion: Date;
    setFechaAsignacion(): void;
    empleado: Empleado;
    proyecto: Proyecto;
}
