"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const midia_1 = tslib_1.__importDefault(require("./midia"));
const tipoMidia_1 = tslib_1.__importDefault(require("../../tipos/tipoMidia"));
class Foto extends midia_1.default {
    constructor(dados) {
        super(dados, tipoMidia_1.default.IMAGEM);
    }
}
exports.default = Foto;
//# sourceMappingURL=foto.js.map