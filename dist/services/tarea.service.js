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
exports.TareaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tarea_entity_1 = require("../entities/tarea.entity");
let TareaService = class TareaService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    create(dto) {
        const tarea = this.repo.create({
            ...dto,
            proyecto: { id_proyecto: dto.id_proyecto },
            empleado: { id_empleado: dto.id_empleado },
        });
        return this.repo.save(tarea);
    }
    findAll() {
        return this.repo.find({ relations: ['proyecto', 'empleado', 'empleado.cargo'] });
    }
    findOne(id) {
        return this.repo.findOne({
            where: { id_tarea: id },
            relations: ['proyecto', 'empleado', 'empleado.cargo'],
        });
    }
    async getCostoProyecto(id_proyecto) {
        const tareas = await this.repo.find({
            where: { proyecto: { id_proyecto } },
            relations: ['empleado', 'empleado.cargo'],
        });
        const detalle = tareas.map((t) => ({
            tarea: t.titulo,
            empleado: t.empleado?.nombre,
            cargo: t.empleado?.cargo?.nombre,
            horas_reales: t.horas_reales ?? 0,
            valor_hora: Number(t.empleado?.cargo?.valor_hora ?? 0),
            costo: (t.horas_reales ?? 0) * Number(t.empleado?.cargo?.valor_hora ?? 0),
        }));
        const costo_total = detalle.reduce((acc, d) => acc + d.costo, 0);
        return { id_proyecto, costo_total, detalle };
    }
    async update(id, dto) {
        await this.repo.update(id, dto);
        return this.findOne(id);
    }
    remove(id) {
        return this.repo.delete(id);
    }
};
exports.TareaService = TareaService;
exports.TareaService = TareaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tarea_entity_1.Tarea)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TareaService);
//# sourceMappingURL=tarea.service.js.map