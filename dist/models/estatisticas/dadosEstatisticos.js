"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tipoDadoEstatistico_1 = tslib_1.__importDefault(require("../../tipos/tipoDadoEstatistico"));
const id_1 = tslib_1.__importDefault(require("../id"));
class DadosEstatisticos extends id_1.default {
    constructor(dados, tipoDadoEstatistico) {
        super(dados);
        this.peso = dados.peso;
        this.data = dados.data;
        this.origem = dados.origem;
        this.tipoOrigem = dados.tipoOrigem;
        this.tipoDadoEstatistico = tipoDadoEstatistico;
    }
    obterId() {
        return this.id;
    }
    obterPeso() {
        return this.peso;
    }
    obterData() {
        return this.data;
    }
    obterOrigem() {
        return this.origem;
    }
    obterTipoOrigem() {
        return this.tipoOrigem;
    }
    obterTipoDadoEstatistico() {
        return this.tipoDadoEstatistico;
    }
    isValido() {
        return (this.peso !== undefined &&
            this.peso >= 0 &&
            this.data !== undefined &&
            this.data.getTime() < Date.now() &&
            this.origem !== undefined &&
            this.origem.trim().length > 0 &&
            this.tipoOrigem !== undefined &&
            this.tipoDadoEstatistico !== undefined &&
            this.tipoDadoEstatistico !== tipoDadoEstatistico_1.default.INDEFINIDO);
    }
}
exports.default = DadosEstatisticos;
//# sourceMappingURL=dadosEstatisticos.js.map