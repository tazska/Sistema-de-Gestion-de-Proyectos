import { DepartamentoService } from '../services/departamento.service';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';
import { UpdateDepartamentoDto } from '../dto/update-departamento.dto';
export declare class DepartamentoController {
    private readonly service;
    constructor(service: DepartamentoService);
    create(dto: CreateDepartamentoDto): Promise<import("../entities/departamento.entity").Departamento>;
    findAll(): Promise<import("../entities/departamento.entity").Departamento[]>;
    findOne(id: string): Promise<import("../entities/departamento.entity").Departamento | null>;
    update(id: string, dto: UpdateDepartamentoDto): Promise<import("../entities/departamento.entity").Departamento | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    findEmpleados(id: string): Promise<import("../entities/departamento.entity").Departamento | null>;
}
