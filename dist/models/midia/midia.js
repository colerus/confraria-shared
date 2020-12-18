"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tipoMidia_1 = tslib_1.__importDefault(require("../../tipos/tipoMidia"));
const id_1 = tslib_1.__importDefault(require("../id"));
class Midia extends id_1.default {
    constructor(props, tipoMidia) {
        super(props);
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
    isValido() {
        return (this.path.trim().length > 8 &&
            this.data.getTime() <= Date.now() &&
            this.nomeOriginal.length >= 5 &&
            this.width !== undefined &&
            this.width > 0 &&
            this.height !== undefined &&
            this.height > 0 &&
            this.tipoMidia !== undefined &&
            this.tipoMidia !== tipoMidia_1.default.INDEFINIDO);
    }
}
exports.default = Midia;
//# sourceMappingURL=midia.js.map