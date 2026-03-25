import { Repository } from 'typeorm';
import { Tarea } from '../entities/tarea.entity';
import { CreateTareaDto } from '../dto/create-tarea.dto';
import { UpdateTareaDto } from '../dto/update-tarea.dto';
export declare class TareaService {
    private readonly repo;
    constructor(repo: Repository<Tarea>);
    create(dto: CreateTareaDto): Promise<Tarea>;
    findAll(): Promise<Tarea[]>;
    findOne(id: number): Promise<Tarea | null>;
    update(id: number, dto: UpdateTareaDto): Promise<Tarea | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
