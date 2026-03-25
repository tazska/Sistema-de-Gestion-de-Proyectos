import { Tarea } from '../entities/tarea.entity';
import { Empleado } from '../entities/empleado.entity';
export declare class Seguimiento {
    id_seguimiento: number;
    horas_trabajadas: number;
    fecha_registro: string;
    observacion: string;
    tarea: Tarea;
    empleado: Empleado;
}
