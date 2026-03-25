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
exports.Seguimiento = void 0;
const typeorm_1 = require("typeorm");
const tarea_entity_1 = require("../entities/tarea.entity");
const empleado_entity_1 = require("../entities/empleado.entity");
let Seguimiento = class Seguimiento {
    id_seguimiento;
    horas_trabajadas;
    fecha_registro;
    observacion;
    tarea;
    empleado;
};
exports.Seguimiento = Seguimiento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Seguimiento.prototype, "id_seguimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Seguimiento.prototype, "horas_trabajadas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Seguimiento.prototype, "fecha_registro", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Seguimiento.prototype, "observacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tarea_entity_1.Tarea, (t) => t.seguimientos),
    (0, typeorm_1.JoinColumn)({ name: 'id_tarea' }),
    __metadata("design:type", tarea_entity_1.Tarea)
], Seguimiento.prototype, "tarea", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empleado_entity_1.Empleado),
    (0, typeorm_1.JoinColumn)({ name: 'id_empleado' }),
    __metadata("design:type", empleado_entity_1.Empleado)
], Seguimiento.prototype, "empleado", void 0);
exports.Seguimiento = Seguimiento = __decorate([
    (0, typeorm_1.Entity)()
], Seguimiento);
//# sourceMappingURL=seguimiento.entity.js.map