"use strict";
var DadosExibicao_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const foto_1 = tslib_1.__importDefault(require("../midia/foto"));
const id_1 = tslib_1.__importDefault(require("../id"));
const typeorm_1 = require("typeorm");
const perfil_1 = tslib_1.__importDefault(require("./perfil"));
let DadosExibicao = DadosExibicao_1 = class DadosExibicao extends id_1.default {
    constructor(dados) {
        super();
        this.id = dados.id;
        this.nomeCurto = dados.nomeCurto;
        this.nomeComercial = dados.nomeComercial;
        this.fotoPerfil = dados.fotoPerfil;
        this.perfil = dados.perfil;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    alterarNomeCurto(nome) {
        this.nomeCurto = nome;
    }
    alterarNomeComercial(nome) {
        this.nomeComercial = nome;
    }
    alterarFotoPerfil(foto) {
        this.fotoPerfil = foto;
    }
    obterId() {
        return this.id;
    }
    obterNomeCurto() {
        return this.nomeCurto;
    }
    obterNomeComercial() {
        return this.nomeComercial;
    }
    obterFoto() {
        return this.fotoPerfil;
    }
    static validar(dados) {
        return dados instanceof DadosExibicao_1
            ? dados.obterNomeCurto().length >= 5
            : DadosExibicao_1.isPropsDadosExibicaoValido(dados);
    }
    static isPropsDadosExibicaoValido(props) {
        const temp = new DadosExibicao_1(props);
        return temp.isValido();
    }
    isValido() {
        return DadosExibicao_1.validar(this);
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], DadosExibicao.prototype, "nomeCurto", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], DadosExibicao.prototype, "nomeComercial", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(() => foto_1.default),
    tslib_1.__metadata("design:type", foto_1.default)
], DadosExibicao.prototype, "fotoPerfil", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(() => perfil_1.default, (perfil) => perfil.dadosPessoais),
    tslib_1.__metadata("design:type", perfil_1.default)
], DadosExibicao.prototype, "perfil", void 0);
DadosExibicao = DadosExibicao_1 = tslib_1.__decorate([
    typeorm_1.Entity("dados_exibicao"),
    tslib_1.__metadata("design:paramtypes", [Object])
], DadosExibicao);
exports.default = DadosExibicao;
//# sourceMappingURL=dadosExibicao.js.map