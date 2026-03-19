import { Departamento } from '../entities/departamento.entity';
import { Tarea } from '../entities/tarea.entity';
export declare class Proyecto {
    id_proyecto: number;
    nombre: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string;
    estado: string;
    departamento: Departamento;
    tareas: Tarea[];
}
