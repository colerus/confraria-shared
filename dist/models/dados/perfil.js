"use strict";
var Perfil_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tipoPerfil_1 = tslib_1.__importDefault(require("../../tipos/tipoPerfil"));
const dadosPessoais_1 = tslib_1.__importDefault(require("./dadosPessoais"));
const dadosExibicao_1 = tslib_1.__importDefault(require("./dadosExibicao"));
const dadosLogin_1 = tslib_1.__importDefault(require("./dadosLogin"));
const dadosCadastro_1 = tslib_1.__importDefault(require("./dadosCadastro"));
const perfilSocial_1 = tslib_1.__importDefault(require("./perfilSocial"));
const perfilError_1 = tslib_1.__importDefault(require("../../exceptions/perfilError"));
const id_1 = tslib_1.__importDefault(require("../id"));
const typeorm_1 = require("typeorm");
let Perfil = Perfil_1 = class Perfil extends id_1.default {
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
        return perfil instanceof Perfil_1
            ? perfil.isValido()
            : new Perfil_1(perfil).isValido();
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
};
tslib_1.__decorate([
    typeorm_1.OneToOne(() => dadosPessoais_1.default, (dados) => dados.perfil),
    tslib_1.__metadata("design:type", dadosPessoais_1.default)
], Perfil.prototype, "dadosPessoais", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(() => dadosExibicao_1.default, (dados) => dados.perfil),
    tslib_1.__metadata("design:type", dadosExibicao_1.default)
], Perfil.prototype, "dadosExibicao", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => dadosLogin_1.default, (login) => login.perfil),
    tslib_1.__metadata("design:type", Array)
], Perfil.prototype, "dadosLogin", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(() => dadosCadastro_1.default, (dados) => dados.perfil),
    tslib_1.__metadata("design:type", dadosCadastro_1.default)
], Perfil.prototype, "dadosCadastro", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => perfilSocial_1.default, (perfil) => perfil.perfil),
    tslib_1.__metadata("design:type", Array)
], Perfil.prototype, "perfisSociais", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Perfil.prototype, "tipoPerfil", void 0);
Perfil = Perfil_1 = tslib_1.__decorate([
    typeorm_1.Entity("perfil"),
    typeorm_1.TableInheritance({ column: { name: "tipoPerfil", type: "varchar" } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Perfil);
exports.default = Perfil;
//# sourceMappingURL=perfil.js.map