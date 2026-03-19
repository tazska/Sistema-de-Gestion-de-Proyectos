import { Repository } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';
export declare class EmpleadoService {
    private readonly repo;
    constructor(repo: Repository<Empleado>);
    create(dto: CreateEmpleadoDto): Promise<Empleado>;
    findAll(): Promise<Empleado[]>;
    findOne(id: number): Promise<Empleado | null>;
    update(id: number, dto: Partial<CreateEmpleadoDto>): Promise<Empleado | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
