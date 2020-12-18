"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class TermoBusca extends id_1.default {
    constructor(termo) {
        super(termo);
        this.busca = termo.busca;
        this.tipoOperacao = termo.tipoOperacao;
        this.termo = termo.termo;
    }
    isValido() {
        return this.busca !== undefined && this.termo !== undefined;
    }
}
exports.default = TermoBusca;
//# sourceMappingURL=termoBusca.js.map