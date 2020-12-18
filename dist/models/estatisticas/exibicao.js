"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dadosEstatisticos_1 = tslib_1.__importDefault(require("./dadosEstatisticos"));
const tipoDadoEstatistico_1 = tslib_1.__importDefault(require("../../tipos/tipoDadoEstatistico"));
class Exibicao extends dadosEstatisticos_1.default {
    constructor(dados) {
        super(dados, tipoDadoEstatistico_1.default.EXIBICAO);
        if ("referencia" in dados) {
            this.referencia = dados.referencia;
        }
    }
    ObterReferencia() {
        return this.referencia;
    }
    isValido() {
        return (super.isValido() && (this.referencia ? this.referencia.length > 0 : false));
    }
}
exports.default = Exibicao;
//# sourceMappingURL=exibicao.js.map