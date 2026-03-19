import { Repository } from 'typeorm';
import { Cargo } from '../entities/cargo.entity';
import { CreateCargoDto } from '../dto/create-cargo.dto';
export declare class CargoService {
    private readonly repo;
    constructor(repo: Repository<Cargo>);
    create(dto: CreateCargoDto): Promise<Cargo>;
    findAll(): Promise<Cargo[]>;
    findOne(id: number): Promise<Cargo | null>;
    update(id: number, dto: Partial<CreateCargoDto>): Promise<Cargo | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
