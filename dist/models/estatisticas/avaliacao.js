"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dadosEstatisticos_1 = tslib_1.__importDefault(require("./dadosEstatisticos"));
const tipoDadoEstatistico_1 = tslib_1.__importDefault(require("../../tipos/tipoDadoEstatistico"));
const typeorm_1 = require("typeorm");
let Avaliacao = class Avaliacao extends dadosEstatisticos_1.default {
    constructor(dados) {
        super(dados, tipoDadoEstatistico_1.default.AVALIACAO);
    }
};
Avaliacao = tslib_1.__decorate([
    typeorm_1.ChildEntity(tipoDadoEstatistico_1.default.AVALIACAO),
    tslib_1.__metadata("design:paramtypes", [Object])
], Avaliacao);
exports.default = Avaliacao;
//# sourceMappingURL=avaliacao.js.map