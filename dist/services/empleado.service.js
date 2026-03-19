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
let EmpleadoService = class EmpleadoService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    create(dto) {
        const empleado = this.repo.create({
            nombre: dto.nombre,
            email: dto.email,
            departamento: { id_departamento: dto.id_departamento },
            cargo: { id_cargo: dto.id_cargo },
        });
        return this.repo.save(empleado);
    }
    findAll() {
        return this.repo.find({ relations: ['departamento', 'cargo'] });
    }
    findOne(id) {
        return this.repo.findOne({
            where: { id_empleado: id },
            relations: ['departamento', 'cargo'],
        });
    }
    async update(id, dto) {
        await this.repo.update(id, dto);
        return this.findOne(id);
    }
    remove(id) {
        return this.repo.delete(id);
    }
};
exports.EmpleadoService = EmpleadoService;
exports.EmpleadoService = EmpleadoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empleado_entity_1.Empleado)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmpleadoService);
//# sourceMappingURL=empleado.service.js.map