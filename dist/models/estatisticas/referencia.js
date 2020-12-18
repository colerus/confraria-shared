"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dadosEstatisticos_1 = tslib_1.__importDefault(require("./dadosEstatisticos"));
const tipoDadoEstatistico_1 = tslib_1.__importDefault(require("../../tipos/tipoDadoEstatistico"));
class Referencia extends dadosEstatisticos_1.default {
    constructor(dadosEstatisticos) {
        super(dadosEstatisticos, tipoDadoEstatistico_1.default.REFERENCIA);
    }
    isValido() {
        return super.isValido();
    }
}
exports.default = Referencia;
//# sourceMappingURL=referencia.js.map