"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dadosEstatisticos_1 = tslib_1.__importDefault(require("./dadosEstatisticos"));
const tipoDadoEstatistico_1 = tslib_1.__importDefault(require("../../tipos/tipoDadoEstatistico"));
class Clique extends dadosEstatisticos_1.default {
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
}
exports.default = Clique;
//# sourceMappingURL=clique.js.map