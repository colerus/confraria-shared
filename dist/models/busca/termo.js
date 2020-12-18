"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Termo extends __1.Id {
    constructor(termo) {
        super(termo);
        this.tipoTermo = termo.tipoTermo;
        this.valor = termo.valor;
        this.termoBuscas = termo.termoBuscas;
    }
    isValido() {
        return this.tipoTermo !== undefined && this.valor.trim().length > 2;
    }
}
exports.default = Termo;
//# sourceMappingURL=termo.js.map