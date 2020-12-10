"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tipoPerfil_1 = tslib_1.__importDefault(require("../../tipos/tipoPerfil"));
const perfilError_1 = tslib_1.__importDefault(require("../../exceptions/perfilError"));
const id_1 = tslib_1.__importDefault(require("../id"));
class Perfil extends id_1.default {
    constructor(dados) {
        super();
        this.id = dados.id;
        this.dadosPessoais = dados.dadosPessoais;
        this.dadosExibicao = dados.dadosExibicao;
        this.dadosLogin = dados.dadosLogin;
        this.dadosCadastro = dados.dadosCadastro;
        this.perfisSociais = dados.perfisSociais;
        this.tipoPerfil = dados.tipoPerfil;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    adicionarDadosLogin(dadosLogin) {
        if (!dadosLogin.isValido()) {
            throw new perfilError_1.default("Dados de login inválidos");
        }
        this.dadosLogin.push(dadosLogin);
    }
    adicionarPerfilSocial(perfil) {
        //TODO: Implementar
        if (this.perfisSociais === undefined) {
            this.perfisSociais = [];
        }
        this.perfisSociais.push(perfil);
    }
    removerDadosLogin(dadosLogin) {
        const index = this.dadosLogin.indexOf(dadosLogin);
        if (index >= 0) {
            this.dadosLogin.splice(index, 1);
        }
    }
    removerPerfilSocial(perfil) {
        if (this.perfisSociais === undefined) {
            this.perfisSociais = [];
        }
        const index = this.perfisSociais.indexOf(perfil);
        if (index >= 0) {
            this.perfisSociais.splice(index, 1);
        }
    }
    obterId() {
        return this.id;
    }
    obterDadosPessoais() {
        return this.dadosPessoais;
    }
    obterDadosExibicao() {
        return this.dadosExibicao;
    }
    obterDadosLogin() {
        return this.dadosLogin;
    }
    obterDadosCadastro() {
        return this.dadosCadastro;
    }
    obterPerfisSociais() {
        return this.perfisSociais;
    }
    obterTipoPerfil() {
        return this.tipoPerfil;
    }
    static validar(perfil) {
        return perfil instanceof Perfil
            ? perfil.isValido()
            : new Perfil(perfil).isValido();
    }
    isValido() {
        return (this.isTipoPerfilValido() &&
            this.isDadosPessoaisValidos() &&
            this.isDadosCadastroValidos() &&
            this.isDadosExibicaoValidos() &&
            this.isDadosLoginValidos() &&
            this.isPerfisSociaisValidos());
    }
    isTipoPerfilValido() {
        return (this.tipoPerfil === tipoPerfil_1.default.CLIENTE ||
            this.tipoPerfil === tipoPerfil_1.default.USUARIO);
    }
    isDadosPessoaisValidos() {
        return this.dadosPessoais.isValido();
    }
    isDadosExibicaoValidos() {
        return this.dadosExibicao.isValido();
    }
    isDadosLoginValidos() {
        return this.dadosLogin.every((current) => current.isValido());
    }
    isDadosCadastroValidos() {
        return this.dadosCadastro.isValido();
    }
    isPerfisSociaisValidos() {
        return this.perfisSociais
            ? this.perfisSociais.every((current) => current.isValido())
            : true;
    }
}
exports.default = Perfil;
//# sourceMappingURL=perfil.js.map