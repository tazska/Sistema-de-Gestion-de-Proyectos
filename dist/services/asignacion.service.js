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
exports.AsignacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const asignacion_entity_1 = require("../entities/asignacion.entity");
let AsignacionService = class AsignacionService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(dto) {
        const count = await this.repo.count({
            where: { empleado: { id_empleado: dto.id_empleado } },
        });
        if (count >= 3) {
            throw new common_1.BadRequestException(`El empleado ya está asignado a 3 proyectos simultáneos. No se puede agregar más.`);
        }
        const existe = await this.repo.findOne({
            where: {
                empleado: { id_empleado: dto.id_empleado },
                proyecto: { id_proyecto: dto.id_proyecto },
            },
        });
        if (existe) {
            throw new common_1.BadRequestException(`El empleado ya está asignado a este proyecto.`);
        }
        const asignacion = this.repo.create({
            fecha_asignacion: dto.fecha_asignacion,
            empleado: { id_empleado: dto.id_empleado },
            proyecto: { id_proyecto: dto.id_proyecto },
        });
        return this.repo.save(asignacion);
    }
    findAll() {
        return this.repo.find({
            relations: ['empleado', 'empleado.cargo', 'proyecto'],
        });
    }
    findOne(id) {
        return this.repo.findOne({
            where: { id_asignacion: id },
            relations: ['empleado', 'empleado.cargo', 'proyecto'],
        });
    }
    findByEmpleado(id_empleado) {
        return this.repo.find({
            where: { empleado: { id_empleado } },
            relations: ['proyecto', 'proyecto.departamento'],
        });
    }
    findByProyecto(id_proyecto) {
        return this.repo.find({
            where: { proyecto: { id_proyecto } },
            relations: ['empleado', 'empleado.cargo'],
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
exports.AsignacionService = AsignacionService;
exports.AsignacionService = AsignacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asignacion_entity_1.Asignacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AsignacionService);
//# sourceMappingURL=asignacion.service.js.map