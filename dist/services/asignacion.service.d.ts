import { Repository } from 'typeorm';
import { Asignacion } from '../entities/asignacion.entity';
import { CreateAsignacionDto } from '../dto/create-asignacion.dto';
import { UpdateAsignacionDto } from '../dto/update-asignacion.dto';
export declare class AsignacionService {
    private readonly repo;
    constructor(repo: Repository<Asignacion>);
    create(dto: CreateAsignacionDto): Promise<Asignacion>;
    findAll(): Promise<Asignacion[]>;
    findOne(id: number): Promise<Asignacion | null>;
    findByEmpleado(id_empleado: number): Promise<Asignacion[]>;
    findByProyecto(id_proyecto: number): Promise<Asignacion[]>;
    update(id: number, dto: UpdateAsignacionDto): Promise<Asignacion | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
