"use strict";
var Servico_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const servicoError_1 = tslib_1.__importDefault(require("../../exceptions/servicoError"));
const id_1 = tslib_1.__importDefault(require("../id"));
const typeorm_1 = require("typeorm");
let Servico = Servico_1 = class Servico extends id_1.default {
    constructor(servico) {
        super();
        this.id = servico.id;
        this.nome = servico.nome;
        this.derivacoes = servico.derivacoes;
        this.parent = servico.parent;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    definirParent(parent) {
        if (this.parent === undefined) {
            this.parent = parent;
        }
        else {
            throw new servicoError_1.default("Parent já foi definido");
        }
    }
    adicionarDerivacao(derivacao) {
        if (derivacao.length < 3) {
            throw new servicoError_1.default("Nome derivado inválido.");
        }
        if (this.derivacoes === undefined) {
            this.derivacoes = [];
        }
        this.derivacoes.push(derivacao);
    }
    obterId() {
        return this.id;
    }
    obterNome() {
        return this.nome;
    }
    obterDerivacoes() {
        return this.derivacoes;
    }
    obterParent() {
        return this.parent;
    }
    static validar(servico) {
        return servico instanceof Servico_1
            ? servico.isValido()
            : new Servico_1(servico).isValido();
    }
    isValido() {
        return (this.isNomeValido() && this.isDerivacoesValidas() && this.isParentValido());
    }
    isNomeValido() {
        return this.nome.length > 3;
    }
    isDerivacoesValidas() {
        return this.derivacoes
            ? this.derivacoes.every((current) => current.length > 3)
            : true;
    }
    isParentValido() {
        return this.parent ? this.parent.isValido() : true;
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Servico.prototype, "nome", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Array)
], Servico.prototype, "derivacoes", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Servico_1, (servico) => servico.childs),
    tslib_1.__metadata("design:type", Servico)
], Servico.prototype, "parent", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => Servico_1, (servico) => servico.parent),
    tslib_1.__metadata("design:type", Array)
], Servico.prototype, "childs", void 0);
Servico = Servico_1 = tslib_1.__decorate([
    typeorm_1.Entity("servico"),
    tslib_1.__metadata("design:paramtypes", [Object])
], Servico);
exports.default = Servico;
//# sourceMappingURL=servico.js.map