"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const generate_password_1 = tslib_1.__importDefault(require("generate-password"));
const config_1 = require("../../config");
const id_1 = tslib_1.__importDefault(require("../id"));
const crypto_1 = require("../../utils/crypto");
class DadosLogin extends id_1.default {
    constructor(dados, tipoLogin) {
        super(dados);
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
    isValido() {
        return (this.tipoLoginValido() &&
            this.usuarioValido() &&
            (this.senhaValida() || this.senhaFoiCriptografada()));
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
}
exports.default = DadosLogin;
//# sourceMappingURL=dadosLogin.js.map