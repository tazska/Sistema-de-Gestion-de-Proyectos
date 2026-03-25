import { Repository } from 'typeorm';
import { Departamento } from '../entities/departamento.entity';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';
import { UpdateDepartamentoDto } from '../dto/update-departamento.dto';
export declare class DepartamentoService {
    private readonly repo;
    constructor(repo: Repository<Departamento>);
    create(dto: CreateDepartamentoDto): Promise<Departamento>;
    findAll(): Promise<Departamento[]>;
    findOne(id: number): Promise<Departamento | null>;
    update(id: number, dto: UpdateDepartamentoDto): Promise<Departamento | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findEmpleados(id: number): Promise<Departamento | null>;
}
