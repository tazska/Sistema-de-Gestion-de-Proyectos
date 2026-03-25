import { EmpleadoService } from '../services/empleado.service';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';
import { UpdateEmpleadoDto } from '../dto/update-empleado.dto';
export declare class EmpleadoController {
    private readonly service;
    constructor(service: EmpleadoService);
    createCargo(dto: {
        nombre: string;
        valor_hora: number;
    }): Promise<import("../entities/cargo.entity").Cargo>;
    findAllCargos(): Promise<import("../entities/cargo.entity").Cargo[]>;
    findOneCargo(id: string): Promise<import("../entities/cargo.entity").Cargo | null>;
    updateCargo(id: string, dto: Partial<{
        nombre: string;
        valor_hora: number;
    }>): Promise<import("../entities/cargo.entity").Cargo | null>;
    removeCargo(id: string): Promise<import("typeorm").DeleteResult>;
    create(dto: CreateEmpleadoDto): Promise<import("../entities/empleado.entity").Empleado>;
    findAll(): Promise<import("../entities/empleado.entity").Empleado[]>;
    findOne(id: string): Promise<import("../entities/empleado.entity").Empleado | null>;
    update(id: string, dto: UpdateEmpleadoDto): Promise<import("../entities/empleado.entity").Empleado | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
