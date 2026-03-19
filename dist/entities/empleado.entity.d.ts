import { Departamento } from '../entities/departamento.entity';
import { Cargo } from '../entities/cargo.entity';
import { Tarea } from '../entities/tarea.entity';
export declare class Empleado {
    id_empleado: number;
    nombre: string;
    email: string;
    departamento: Departamento;
    cargo: Cargo;
    tareas: Tarea[];
}
