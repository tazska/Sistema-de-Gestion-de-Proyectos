"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const empleado_entity_1 = require("../entities/empleado.entity");
const empleado_service_1 = require("../services/empleado.service");
const empleado_controller_1 = require("../controllers/empleado.controller");
const cargo_entity_1 = require("../entities/cargo.entity");
let EmpleadoModule = class EmpleadoModule {
};
exports.EmpleadoModule = EmpleadoModule;
exports.EmpleadoModule = EmpleadoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([empleado_entity_1.Empleado, cargo_entity_1.Cargo])],
        providers: [empleado_service_1.EmpleadoService],
        controllers: [empleado_controller_1.EmpleadoController],
        exports: [empleado_service_1.EmpleadoService],
    })
], EmpleadoModule);
//# sourceMappingURL=empleado.module.js.map