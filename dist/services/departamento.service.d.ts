import { Repository } from 'typeorm';
import { Departamento } from '../entities/departamento.entity';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';
export declare class DepartamentoService {
    private readonly repo;
    constructor(repo: Repository<Departamento>);
    create(dto: CreateDepartamentoDto): Promise<Departamento>;
    findAll(): Promise<Departamento[]>;
    findOne(id: number): Promise<Departamento | null>;
    findEmpleados(id: number): Promise<Departamento | null>;
}
