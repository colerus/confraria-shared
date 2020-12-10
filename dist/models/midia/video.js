"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const midia_1 = tslib_1.__importDefault(require("./midia"));
const tipoMidia_1 = tslib_1.__importDefault(require("../../tipos/tipoMidia"));
class Video extends midia_1.default {
    constructor(dados) {
        super(dados, tipoMidia_1.default.VIDEO);
        if ("duracao" in dados) {
            this.duracao = dados.duracao;
        }
    }
    alterarDuracao(duracao) {
        this.duracao = duracao;
    }
    obterDuracao() {
        return this.duracao;
    }
}
exports.default = Video;
//# sourceMappingURL=video.js.map