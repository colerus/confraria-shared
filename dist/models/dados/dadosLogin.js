"use strict";
var DadosLogin_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tipoLogin_1 = tslib_1.__importDefault(require("../../tipos/tipoLogin"));
const generate_password_1 = tslib_1.__importDefault(require("generate-password"));
const config_1 = require("../../config");
const id_1 = tslib_1.__importDefault(require("../id"));
const crypto_1 = require("../../utils/crypto");
const typeorm_1 = require("typeorm");
const _1 = require(".");
let DadosLogin = DadosLogin_1 = class DadosLogin extends id_1.default {
    constructor(dados, tipoLogin) {
        super();
        this.id = dados.id;
        this.tipoLogin = tipoLogin;
        this.usuario = dados.usuario;
        this.senha = dados.senha;
        this.senhaCriptografada = false;
        this.perfil = dados.perfil;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    definirSenhaCriptografada(hash) {
        this.senha = hash;
        this.senhaCriptografada = true;
    }
    alterarSenha(senha) {
        this.senha = senha;
    }
    obterId() {
        return this.id;
    }
    obterTipoLogin() {
        return this.tipoLogin;
    }
    obterUsuario() {
        return this.usuario;
    }
    obterSenha() {
        return this.senha;
    }
    gerarNovaSenha() {
        this.senha = generate_password_1.default.generate({
            length: 10,
            numbers: true,
            lowercase: true,
            uppercase: true,
            symbols: true,
        });
        this.senhaCriptografada = false;
    }
    encriptarSenha() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.senhaFoiCriptografada()
                ? this.senha
                : yield crypto_1.encriptar(this.senha, config_1.BCRYPT_SALT, (_err, hash) => {
                    this.definirSenhaCriptografada(hash);
                }).then(() => this.senha);
        });
    }
    static validar(dados, tipoLogin) {
        return dados instanceof DadosLogin_1
            ? this.validarDadosLogin(dados)
            : this.validarPropsDadosLogin(dados, tipoLogin);
    }
    static validarDadosLogin(dados) {
        return (dados.tipoLoginValido() && dados.usuarioValido() && dados.senhaValida());
    }
    static validarPropsDadosLogin(dados, tipo) {
        const tempLogin = new DadosLogin_1(dados, tipo);
        return tempLogin.isValido();
    }
    isValido() {
        return DadosLogin_1.validar(this, this.tipoLogin);
    }
    tipoLoginValido() {
        return this.tipoLogin !== undefined;
    }
    usuarioValido() {
        return this.usuario.length >= 5;
    }
    senhaValida() {
        return this.senha.length >= 8;
    }
    senhaFoiCriptografada() {
        return this.senhaValida() && this.senhaCriptografada === true;
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], DadosLogin.prototype, "tipoLogin", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], DadosLogin.prototype, "usuario", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], DadosLogin.prototype, "senha", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], DadosLogin.prototype, "senhaCriptografada", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => _1.Perfil, (perfil) => perfil.dadosLogin),
    tslib_1.__metadata("design:type", _1.Perfil)
], DadosLogin.prototype, "perfil", void 0);
DadosLogin = DadosLogin_1 = tslib_1.__decorate([
    typeorm_1.Entity("dados_login"),
    tslib_1.__metadata("design:paramtypes", [Object, Number])
], DadosLogin);
exports.default = DadosLogin;
//# sourceMappingURL=dadosLogin.js.map