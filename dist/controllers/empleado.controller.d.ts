import { EmpleadoService } from '../services/empleado.service';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';
export declare class EmpleadoController {
    private readonly service;
    constructor(service: EmpleadoService);
    create(dto: CreateEmpleadoDto): Promise<import("../entities/empleado.entity").Empleado>;
    findAll(): Promise<import("../entities/empleado.entity").Empleado[]>;
    findOne(id: string): Promise<import("../entities/empleado.entity").Empleado | null>;
    update(id: string, dto: Partial<CreateEmpleadoDto>): Promise<import("../entities/empleado.entity").Empleado | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
