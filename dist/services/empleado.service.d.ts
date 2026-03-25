import { Repository } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';
import { UpdateEmpleadoDto } from '../dto/update-empleado.dto';
import { Cargo } from 'src/entities/cargo.entity';
export declare class EmpleadoService {
    private readonly empleadoRepo;
    private readonly cargoRepo;
    constructor(empleadoRepo: Repository<Empleado>, cargoRepo: Repository<Cargo>);
    createCargo(dto: {
        nombre: string;
        valor_hora: number;
    }): Promise<Cargo>;
    findAllCargos(): Promise<Cargo[]>;
    findOneCargo(id: number): Promise<Cargo | null>;
    updateCargo(id: number, dto: Partial<{
        nombre: string;
        valor_hora: number;
    }>): Promise<Cargo | null>;
    removeCargo(id: number): Promise<import("typeorm").DeleteResult>;
    create(dto: CreateEmpleadoDto): Promise<Empleado>;
    findAll(): Promise<Empleado[]>;
    findOne(id: number): Promise<Empleado | null>;
    update(id: number, dto: UpdateEmpleadoDto): Promise<Empleado | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
