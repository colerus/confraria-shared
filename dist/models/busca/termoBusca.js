"use strict";
var TermoBusca_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const tipoOperacaoTermoBusca_1 = tslib_1.__importDefault(require("../../tipos/tipoOperacaoTermoBusca"));
const id_1 = tslib_1.__importDefault(require("../id"));
const busca_1 = tslib_1.__importDefault(require("./busca"));
const termo_1 = tslib_1.__importDefault(require("./termo"));
let TermoBusca = TermoBusca_1 = class TermoBusca extends id_1.default {
    constructor(termo) {
        super();
        this.id = termo.id;
        this.busca = termo.busca;
        this.tipoOperacao = termo.tipoOperacao;
        this.termo = termo.termo;
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
    alterarTipoOperacao(tipo) {
        this.tipoOperacao = tipo;
    }
    obterId() {
        return this.id;
    }
    obterBusca() {
        return this.busca;
    }
    obterTipoOperacao() {
        return this.tipoOperacao;
    }
    static validar(termo) {
        let valido;
        if (termo instanceof TermoBusca_1) {
            valido = termo.termo.valor.trim().length >= 3;
        }
        else {
            const temp = new TermoBusca_1(termo);
            valido = temp.isValido();
        }
        return valido;
    }
    isValido() {
        return TermoBusca_1.validar(this);
    }
};
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => busca_1.default, (busca) => busca.termos),
    tslib_1.__metadata("design:type", busca_1.default)
], TermoBusca.prototype, "busca", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], TermoBusca.prototype, "tipoOperacao", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => termo_1.default, (termo) => termo.termoBuscas),
    tslib_1.__metadata("design:type", termo_1.default)
], TermoBusca.prototype, "termo", void 0);
TermoBusca = TermoBusca_1 = tslib_1.__decorate([
    typeorm_1.Entity("termo_busca"),
    tslib_1.__metadata("design:paramtypes", [Object])
], TermoBusca);
exports.default = TermoBusca;
//# sourceMappingURL=termoBusca.js.map