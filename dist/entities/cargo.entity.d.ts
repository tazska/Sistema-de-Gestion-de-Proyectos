import { Empleado } from '../entities/empleado.entity';
export declare class Cargo {
    id_cargo: number;
    nombre: string;
    valor_hora: number;
    empleados: Empleado[];
}
