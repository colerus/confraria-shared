"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dadosEstatisticos_1 = tslib_1.__importDefault(require("./dadosEstatisticos"));
const tipoDadoEstatistico_1 = tslib_1.__importDefault(require("../../tipos/tipoDadoEstatistico"));
const typeorm_1 = require("typeorm");
let Clique = class Clique extends dadosEstatisticos_1.default {
    constructor(dados) {
        super(dados, tipoDadoEstatistico_1.default.CLIQUE);
        if ("x" in dados) {
            this.x = dados.x;
        }
        if ("y" in dados) {
            this.y = dados.y;
        }
    }
    obterX() {
        return this.x;
    }
    obterY() {
        return this.y;
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Clique.prototype, "x", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Clique.prototype, "y", void 0);
Clique = tslib_1.__decorate([
    typeorm_1.ChildEntity(tipoDadoEstatistico_1.default.CLIQUE),
    tslib_1.__metadata("design:paramtypes", [Object])
], Clique);
exports.default = Clique;
//# sourceMappingURL=clique.js.map