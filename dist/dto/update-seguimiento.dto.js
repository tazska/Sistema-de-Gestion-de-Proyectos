"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeguimientoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_seguimiento_dto_1 = require("./create-seguimiento.dto");
class UpdateSeguimientoDto extends (0, mapped_types_1.PartialType)(create_seguimiento_dto_1.CreateSeguimientoDto) {
}
exports.UpdateSeguimientoDto = UpdateSeguimientoDto;
//# sourceMappingURL=update-seguimiento.dto.js.map