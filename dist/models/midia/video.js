"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const midia_1 = tslib_1.__importDefault(require("./midia"));
const tipoMidia_1 = tslib_1.__importDefault(require("../../tipos/tipoMidia"));
const typeorm_1 = require("typeorm");
let Video = class Video extends midia_1.default {
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
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Video.prototype, "duracao", void 0);
Video = tslib_1.__decorate([
    typeorm_1.ChildEntity(tipoMidia_1.default.VIDEO),
    tslib_1.__metadata("design:paramtypes", [Object])
], Video);
exports.default = Video;
//# sourceMappingURL=video.js.map