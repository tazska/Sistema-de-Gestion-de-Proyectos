import { Repository } from 'typeorm';
import { Proyecto } from '../entities/proyecto.entity';
import { CreateProyectoDto } from '../dto/create-proyecto.dto';
export declare class ProyectoService {
    private readonly repo;
    constructor(repo: Repository<Proyecto>);
    create(dto: CreateProyectoDto): Promise<Proyecto>;
    findAll(): Promise<Proyecto[]>;
    findOne(id: number): Promise<Proyecto | null>;
    update(id: number, dto: Partial<CreateProyectoDto>): Promise<Proyecto | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
