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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignacion = void 0;
const typeorm_1 = require("typeorm");
const empleado_entity_1 = require("../entities/empleado.entity");
const proyecto_entity_1 = require("../entities/proyecto.entity");
let Asignacion = class Asignacion {
    id_asignacion;
    fecha_asignacion;
    setFechaAsignacion() {
        this.fecha_asignacion = new Date();
    }
    empleado;
    proyecto;
};
exports.Asignacion = Asignacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Asignacion.prototype, "id_asignacion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        name: 'fecha_asignacion',
        nullable: true
    }),
    __metadata("design:type", Date)
], Asignacion.prototype, "fecha_asignacion", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Asignacion.prototype, "setFechaAsignacion", null);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empleado_entity_1.Empleado),
    (0, typeorm_1.JoinColumn)({ name: 'id_empleado' }),
    __metadata("design:type", empleado_entity_1.Empleado)
], Asignacion.prototype, "empleado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto),
    (0, typeorm_1.JoinColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], Asignacion.prototype, "proyecto", void 0);
exports.Asignacion = Asignacion = __decorate([
    (0, typeorm_1.Entity)()
], Asignacion);
//# sourceMappingURL=asignacion.entity.js.map