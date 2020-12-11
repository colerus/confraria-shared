"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const tipoMidia_1 = tslib_1.__importDefault(require("../../tipos/tipoMidia"));
const id_1 = tslib_1.__importDefault(require("../id"));
let Midia = class Midia extends id_1.default {
    constructor(props, tipoMidia) {
        super();
        this.id = props.id;
        this.path = props.path;
        this.data = new Date();
        this.nomeOriginal = "";
        this.titulo = "";
        this.descricao = "";
        this.ativo = false;
        this.width = props.width;
        this.height = props.height;
        this.tipoMidia = tipoMidia;
        if (props.data)
            this.data = props.data;
        if (props.nomeOriginal != null)
            this.nomeOriginal = props.nomeOriginal;
        if (props.titulo != null)
            this.titulo = props.titulo;
        if (props.descricao != null)
            this.descricao = props.descricao;
        if (props.ativo)
            this.ativo = props.ativo;
    }
    alterarId(id) {
        if (id === undefined) {
            this.id = id;
        }
    }
    alterarTitulo(titulo) {
        this.titulo = titulo || "";
    }
    alterarDescricao(descricao) {
        this.descricao = descricao || "";
    }
    ativar() {
        this.ativo = true;
    }
    desativar() {
        this.ativo = false;
    }
    obterId() {
        return this.id;
    }
    obterPath() {
        return this.path;
    }
    obterData() {
        return this.data;
    }
    obterNomeOriginal() {
        return this.nomeOriginal;
    }
    obterTitulo() {
        return this.titulo;
    }
    obterDescricao() {
        return this.descricao;
    }
    isAtivo() {
        return this.ativo;
    }
    obterWisth() {
        return this.width;
    }
    obterHeight() {
        return this.height;
    }
    obterTipoMidia() {
        return this.tipoMidia;
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Midia.prototype, "path", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Midia.prototype, "nomeOriginal", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], Midia.prototype, "data", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Midia.prototype, "titulo", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Midia.prototype, "descricao", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Midia.prototype, "ativo", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Midia.prototype, "tipoMidia", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Midia.prototype, "width", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Midia.prototype, "height", void 0);
Midia = tslib_1.__decorate([
    typeorm_2.Entity("midia"),
    typeorm_1.TableInheritance({ column: { name: "tipoMidia", type: "varchar" } }),
    tslib_1.__metadata("design:paramtypes", [Object, Number])
], Midia);
exports.default = Midia;
//# sourceMappingURL=midia.js.map