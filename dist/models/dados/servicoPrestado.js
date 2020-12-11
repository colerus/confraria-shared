"use strict";
var ServicoPrestado_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const servico_1 = tslib_1.__importDefault(require("./servico"));
const id_1 = tslib_1.__importDefault(require("../id"));
const typeorm_1 = require("typeorm");
const _1 = require(".");
let ServicoPrestado = ServicoPrestado_1 = class ServicoPrestado extends id_1.default {
    constructor(servico) {
        super();
        this.id = servico.id;
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
    static validar(servico) {
        return servico instanceof ServicoPrestado_1
            ? servico.isValido()
            : new ServicoPrestado_1(servico).isValido();
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
};
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => servico_1.default),
    tslib_1.__metadata("design:type", servico_1.default)
], ServicoPrestado.prototype, "servico", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], ServicoPrestado.prototype, "faixaPrecoInicial", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], ServicoPrestado.prototype, "faixaPrecoFinal", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => _1.PerfilPrestador, (perfil) => perfil.servicos),
    tslib_1.__metadata("design:type", Array)
], ServicoPrestado.prototype, "perfis", void 0);
ServicoPrestado = ServicoPrestado_1 = tslib_1.__decorate([
    typeorm_1.Entity("servico_prestado"),
    tslib_1.__metadata("design:paramtypes", [Object])
], ServicoPrestado);
exports.default = ServicoPrestado;
//# sourceMappingURL=servicoPrestado.js.map