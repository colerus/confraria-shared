"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const midia_1 = tslib_1.__importDefault(require("./midia"));
const tipoMidia_1 = tslib_1.__importDefault(require("../../tipos/tipoMidia"));
const typeorm_1 = require("typeorm");
let Foto = class Foto extends midia_1.default {
    constructor(dados) {
        super(dados, tipoMidia_1.default.IMAGEM);
    }
};
Foto = tslib_1.__decorate([
    typeorm_1.ChildEntity(tipoMidia_1.default.IMAGEM),
    tslib_1.__metadata("design:paramtypes", [Object])
], Foto);
exports.default = Foto;
//# sourceMappingURL=foto.js.map