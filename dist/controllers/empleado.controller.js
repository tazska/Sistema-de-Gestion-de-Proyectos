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
exports.EmpleadoController = void 0;
const common_1 = require("@nestjs/common");
const empleado_service_1 = require("../services/empleado.service");
const create_empleado_dto_1 = require("../dto/create-empleado.dto");
const update_empleado_dto_1 = require("../dto/update-empleado.dto");
let EmpleadoController = class EmpleadoController {
    service;
    constructor(service) {
        this.service = service;
    }
    createCargo(dto) {
        return this.service.createCargo(dto);
    }
    findAllCargos() {
        return this.service.findAllCargos();
    }
    findOneCargo(id) {
        return this.service.findOneCargo(+id);
    }
    updateCargo(id, dto) {
        return this.service.updateCargo(+id, dto);
    }
    removeCargo(id) {
        return this.service.removeCargo(+id);
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
    update(id, dto) {
        return this.service.update(+id, dto);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.EmpleadoController = EmpleadoController;
__decorate([
    (0, common_1.Post)('cargos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmpleadoController.prototype, "createCargo", null);
__decorate([
    (0, common_1.Get)('cargos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmpleadoController.prototype, "findAllCargos", null);
__decorate([
    (0, common_1.Get)('cargos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpleadoController.prototype, "findOneCargo", null);
__decorate([
    (0, common_1.Patch)('cargos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EmpleadoController.prototype, "updateCargo", null);
__decorate([
    (0, common_1.Delete)('cargos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpleadoController.prototype, "removeCargo", null);
__decorate([
    (0, common_1.Post)('empleados'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_empleado_dto_1.CreateEmpleadoDto]),
    __metadata("design:returntype", void 0)
], EmpleadoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('empleados'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmpleadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('empleados/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpleadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('empleados/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_empleado_dto_1.UpdateEmpleadoDto]),
    __metadata("design:returntype", void 0)
], EmpleadoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('empleados/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpleadoController.prototype, "remove", null);
exports.EmpleadoController = EmpleadoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [empleado_service_1.EmpleadoService])
], EmpleadoController);
//# sourceMappingURL=empleado.controller.js.map