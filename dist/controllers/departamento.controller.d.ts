import { DepartamentoService } from '../services/departamento.service';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';
export declare class DepartamentoController {
    private readonly service;
    constructor(service: DepartamentoService);
    create(dto: CreateDepartamentoDto): Promise<import("../entities/departamento.entity").Departamento>;
    findAll(): Promise<import("../entities/departamento.entity").Departamento[]>;
    findOne(id: string): Promise<import("../entities/departamento.entity").Departamento | null>;
    findEmpleados(id: string): Promise<import("../entities/departamento.entity").Departamento | null>;
}
