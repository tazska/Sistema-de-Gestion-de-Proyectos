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
exports.SeguimientoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const seguimiento_entity_1 = require("../entities/seguimiento.entity");
let SeguimientoService = class SeguimientoService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    create(dto) {
        const seguimiento = this.repo.create({
            ...dto,
            tarea: { id_tarea: dto.id_tarea },
            empleado: { id_empleado: dto.id_empleado },
        });
        return this.repo.save(seguimiento);
    }
    findAll() {
        return this.repo.find({
            relations: ['tarea', 'empleado', 'empleado.cargo'],
        });
    }
    findOne(id) {
        return this.repo.findOne({
            where: { id_seguimiento: id },
            relations: ['tarea', 'empleado', 'empleado.cargo'],
        });
    }
    async update(id, dto) {
        await this.repo.update(id, dto);
        return this.findOne(id);
    }
    remove(id) {
        return this.repo.delete(id);
    }
    async getCostoProyecto(id_proyecto) {
        const seguimientos = await this.repo.find({
            where: { tarea: { proyecto: { id_proyecto } } },
            relations: ['tarea', 'tarea.proyecto', 'empleado', 'empleado.cargo'],
        });
        if (!seguimientos.length) {
            throw new common_1.NotFoundException(`No se encontraron registros para el proyecto ${id_proyecto}`);
        }
        const detalle = seguimientos.map((s) => {
            const horas = Number(s.horas_trabajadas ?? 0);
            const valor_hora = Number(s.empleado?.cargo?.valor_hora ?? 0);
            const costo = horas * valor_hora;
            return {
                id_seguimiento: s.id_seguimiento,
                fecha_registro: s.fecha_registro,
                tarea: s.tarea?.titulo,
                empleado: s.empleado?.nombre,
                cargo: s.empleado?.cargo?.nombre,
                valor_hora,
                horas_trabajadas: horas,
                costo,
                observacion: s.observacion,
            };
        });
        const por_empleado = detalle.reduce((acc, d) => {
            const key = d.empleado;
            if (!acc[key]) {
                acc[key] = {
                    empleado: d.empleado,
                    cargo: d.cargo,
                    valor_hora: d.valor_hora,
                    total_horas: 0,
                    total_costo: 0,
                };
            }
            acc[key].total_horas += d.horas_trabajadas;
            acc[key].total_costo += d.costo;
            return acc;
        }, {});
        const costo_total = detalle.reduce((acc, d) => acc + d.costo, 0);
        return {
            id_proyecto,
            nombre_proyecto: seguimientos[0].tarea?.proyecto?.nombre,
            costo_total,
            total_registros: seguimientos.length,
            resumen_por_empleado: Object.values(por_empleado),
            detalle,
        };
    }
};
exports.SeguimientoService = SeguimientoService;
exports.SeguimientoService = SeguimientoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seguimiento_entity_1.Seguimiento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeguimientoService);
//# sourceMappingURL=seguimiento.service.js.map