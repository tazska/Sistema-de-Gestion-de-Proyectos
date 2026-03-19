import { CargoService } from '../services/cargo.service';
import { CreateCargoDto } from '../dto/create-cargo.dto';
export declare class CargoController {
    private readonly service;
    constructor(service: CargoService);
    create(dto: CreateCargoDto): Promise<import("../entities/cargo.entity").Cargo>;
    findAll(): Promise<import("../entities/cargo.entity").Cargo[]>;
    findOne(id: string): Promise<import("../entities/cargo.entity").Cargo | null>;
    update(id: string, dto: Partial<CreateCargoDto>): Promise<import("../entities/cargo.entity").Cargo | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
