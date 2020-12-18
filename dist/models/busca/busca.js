"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const termoBusca_1 = tslib_1.__importDefault(require("./termoBusca"));
const termoBuscaError_1 = tslib_1.__importDefault(require("../../exceptions/termoBuscaError"));
const id_1 = tslib_1.__importDefault(require("../id"));
class Busca extends id_1.default {
    constructor(busca) {
        super(busca);
        this.cliente = busca.cliente;
        this.termos = busca.termos;
        this.dataInicio = busca.dataInicio || new Date();
        this.salas = busca.salas;
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
    isValido() {
        return (this.cliente !== undefined &&
            this.termos.length > 0 &&
            this.dataInicio.getTime() <= Date.now());
    }
}
exports.default = Busca;
//# sourceMappingURL=busca.js.map