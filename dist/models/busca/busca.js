"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const perfilCliente_1 = tslib_1.__importDefault(require("../dados/perfilCliente"));
const termoBusca_1 = tslib_1.__importDefault(require("./termoBusca"));
const termoBuscaError_1 = tslib_1.__importDefault(require("../../exceptions/termoBuscaError"));
const id_1 = tslib_1.__importDefault(require("../id"));
const typeorm_1 = require("typeorm");
const _1 = require(".");
const chat_1 = require("../chat");
let Busca = class Busca extends id_1.default {
    constructor(busca) {
        super();
        this.id = busca.id;
        this.cliente = busca.cliente;
        this.termos = busca.termos;
        this.dataInicio = busca.dataInicio || new Date();
        this.salas = busca.salas;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    adicionarTermo(termo) {
        let t;
        if (termo instanceof termoBusca_1.default) {
            t = termo;
        }
        else {
            t = new termoBusca_1.default(termo);
        }
        if (!t.isValido()) {
            throw new termoBuscaError_1.default("Termo de busca inválido");
        }
        const jaExiste = this.termos.filter((tb) => tb.termo.valor.toLowerCase().trim() ===
            t.termo.valor.toLowerCase().trim() &&
            tb.termo.tipoTermo === t.termo.tipoTermo);
        if (jaExiste.length > 0) {
            throw new termoBuscaError_1.default("Já existe um termo deste tipo com este valor");
        }
        this.termos.push(t);
    }
    removerTermo(termoBusca) {
        let t;
        if (termoBusca instanceof termoBusca_1.default) {
            t = termoBusca;
        }
        else {
            t = new termoBusca_1.default(termoBusca);
        }
        const item = this.termos.filter((tb) => tb.termo.valor.toLowerCase().trim() ===
            t.termo.valor.toLowerCase().trim() &&
            tb.termo.tipoTermo === t.termo.tipoTermo);
        if (item.length === 1) {
            const index = this.termos.indexOf(item[0]);
            this.termos.splice(index, 1);
        }
    }
    obterId() {
        return this.id;
    }
    obterCliente() {
        return this.cliente;
    }
    obterTermos() {
        return this.termos;
    }
    obterData() {
        return this.dataInicio;
    }
};
tslib_1.__decorate([
    typeorm_1.ManyToOne((_type) => perfilCliente_1.default, (perfil) => perfil.id),
    tslib_1.__metadata("design:type", perfilCliente_1.default)
], Busca.prototype, "cliente", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => termoBusca_1.default, (termo) => termo.busca),
    tslib_1.__metadata("design:type", Array)
], Busca.prototype, "termos", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], Busca.prototype, "dataInicio", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => _1.PingBusca, (ping) => ping.busca),
    tslib_1.__metadata("design:type", Array)
], Busca.prototype, "pings", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => chat_1.SalaBusca, (sala) => sala.busca),
    tslib_1.__metadata("design:type", Array)
], Busca.prototype, "salas", void 0);
Busca = tslib_1.__decorate([
    typeorm_1.Entity("busca"),
    tslib_1.__metadata("design:paramtypes", [Object])
], Busca);
exports.default = Busca;
//# sourceMappingURL=busca.js.map