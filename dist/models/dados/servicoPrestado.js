"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class ServicoPrestado extends id_1.default {
    constructor(servico) {
        super(servico);
        this.servico = servico.servico;
        this.faixaPrecoInicial = servico.faixaPrecoInicial;
        this.faixaPrecoFinal = servico.faixaPrecoFinal;
        this.perfis = servico.perfis;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    alterarFaixaPrecoInicial(valor) {
        this.faixaPrecoInicial = valor;
    }
    alterarFaixaPrecoFinal(valor) {
        this.faixaPrecoFinal = valor;
    }
    obterId() {
        return this.id;
    }
    obterServico() {
        return this.servico;
    }
    obterFaixaPrecoInicial() {
        return this.faixaPrecoInicial;
    }
    obterFaixaPrecoFinal() {
        return this.faixaPrecoFinal;
    }
    isValido() {
        return this.isServicoValido() && this.isPrecosValidos();
    }
    isServicoValido() {
        return this.servico.isValido();
    }
    isPrecoInicialValido() {
        return this.faixaPrecoInicial >= 0;
    }
    isPrecoFinalValido() {
        return (this.isPrecoInicialValido() &&
            this.faixaPrecoInicial >= this.faixaPrecoInicial);
    }
    isPrecosValidos() {
        return this.isPrecoFinalValido();
    }
}
exports.default = ServicoPrestado;
//# sourceMappingURL=servicoPrestado.js.map