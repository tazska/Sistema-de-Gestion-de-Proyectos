"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const empleado_entity_1 = require("../entities/empleado.entity");
const cargo_entity_1 = require("../entities/cargo.entity");
let EmpleadoService = class EmpleadoService {
    empleadoRepo;
    cargoRepo;
    constructor(empleadoRepo, cargoRepo) {
        this.empleadoRepo = empleadoRepo;
        this.cargoRepo = cargoRepo;
    }
    createCargo(dto) {
        return this.cargoRepo.save(this.cargoRepo.create(dto));
    }
    findAllCargos() {
        return this.cargoRepo.find();
    }
    findOneCargo(id) {
        return this.cargoRepo.findOne({ where: { id_cargo: id } });
    }
    async updateCargo(id, dto) {
        await this.cargoRepo.update(id, dto);
        return this.findOneCargo(id);
    }
    removeCargo(id) {
        return this.cargoRepo.delete(id);
    }
    create(dto) {
        const empleado = this.empleadoRepo.create({
            nombre: dto.nombre,
            email: dto.email,
            departamento: { id_departamento: dto.id_departamento },
            cargo: { id_cargo: dto.id_cargo },
        });
        return this.empleadoRepo.save(empleado);
    }
    findAll() {
        return this.empleadoRepo.find({
            relations: ['departamento', 'cargo'],
        });
    }
    findOne(id) {
        return this.empleadoRepo.findOne({
            where: { id_empleado: id },
            relations: ['departamento', 'cargo'],
        });
    }
    async update(id, dto) {
        await this.empleadoRepo.update(id, dto);
        return this.findOne(id);
    }
    remove(id) {
        return this.empleadoRepo.delete(id);
    }
};
exports.EmpleadoService = EmpleadoService;
exports.EmpleadoService = EmpleadoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empleado_entity_1.Empleado)),
    __param(1, (0, typeorm_1.InjectRepository)(cargo_entity_1.Cargo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EmpleadoService);
//# sourceMappingURL=empleado.service.js.map