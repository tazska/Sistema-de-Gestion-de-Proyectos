import { Empleado } from '../entities/empleado.entity';
import { Proyecto } from '../entities/proyecto.entity';
export declare class Departamento {
    id_departamento: number;
    nombre: string;
    descripcion: string;
    empleados: Empleado[];
    proyectos: Proyecto[];
}
