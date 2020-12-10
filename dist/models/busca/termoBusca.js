"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class TermoBusca extends id_1.default {
    constructor(termo) {
        super();
        this.id = termo.id;
        this.busca = termo.busca;
        this.tipoTermo = termo.tipoTermo;
        this.tipoOperacao = termo.tipoOperacao;
        this.valor = termo.valor;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    definirBusca(busca) {
        if (this.busca === undefined) {
            this.busca = busca;
        }
    }
    alterarTipoTermo(tipo) {
        this.tipoTermo = tipo;
    }
    alterarTipoOperacao(tipo) {
        this.tipoOperacao = tipo;
    }
    alterarValor(valor) {
        this.valor = valor;
    }
    obterId() {
        return this.id;
    }
    obterBusca() {
        return this.busca;
    }
    obterTipoTermo() {
        return this.tipoTermo;
    }
    obterTipoOperacao() {
        return this.tipoOperacao;
    }
    obterValor() {
        return this.valor;
    }
    static validar(termo) {
        let valido;
        if (termo instanceof TermoBusca) {
            valido = termo.obterValor().trim().length >= 3;
        }
        else {
            const temp = new TermoBusca(termo);
            valido = temp.isValido();
        }
        return valido;
    }
    isValido() {
        return TermoBusca.validar(this);
    }
}
exports.default = TermoBusca;
//# sourceMappingURL=termoBusca.js.map