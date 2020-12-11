"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dadosEstatisticos_1 = tslib_1.__importDefault(require("./dadosEstatisticos"));
const tipoDadoEstatistico_1 = tslib_1.__importDefault(require("../../tipos/tipoDadoEstatistico"));
const typeorm_1 = require("typeorm");
let Exibicao = class Exibicao extends dadosEstatisticos_1.default {
    constructor(dados) {
        super(dados, tipoDadoEstatistico_1.default.EXIBICAO);
        if ("referencia" in dados) {
            this.referencia = dados.referencia;
        }
    }
    ObterReferencia() {
        return this.referencia;
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Exibicao.prototype, "referencia", void 0);
Exibicao = tslib_1.__decorate([
    typeorm_1.ChildEntity(tipoDadoEstatistico_1.default.EXIBICAO),
    tslib_1.__metadata("design:paramtypes", [Object])
], Exibicao);
exports.default = Exibicao;
//# sourceMappingURL=exibicao.js.map