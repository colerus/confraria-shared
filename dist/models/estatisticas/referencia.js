"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dadosEstatisticos_1 = tslib_1.__importDefault(require("./dadosEstatisticos"));
const tipoDadoEstatistico_1 = tslib_1.__importDefault(require("../../tipos/tipoDadoEstatistico"));
const typeorm_1 = require("typeorm");
let Referencia = class Referencia extends dadosEstatisticos_1.default {
    constructor(dadosEstatisticos) {
        super(dadosEstatisticos, tipoDadoEstatistico_1.default.REFERENCIA);
    }
};
Referencia = tslib_1.__decorate([
    typeorm_1.ChildEntity(tipoDadoEstatistico_1.default.REFERENCIA),
    tslib_1.__metadata("design:paramtypes", [Object])
], Referencia);
exports.default = Referencia;
//# sourceMappingURL=referencia.js.map