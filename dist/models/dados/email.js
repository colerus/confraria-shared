"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const email_validator_1 = tslib_1.__importDefault(require("email-validator"));
const emailError_1 = tslib_1.__importDefault(require("../../exceptions/emailError"));
const id_1 = tslib_1.__importDefault(require("../id"));
const tipoEmail_1 = tslib_1.__importDefault(require("../../tipos/tipoEmail"));
class Email extends id_1.default {
    constructor(dados) {
        super(dados);
        this.email = dados.email;
        this.tipoEmail = dados.tipoEmail || tipoEmail_1.default.INDEFINIDO;
    }
    alterarId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    alterarEmail(email) {
        if (!email_validator_1.default.validate(this.obterEmail())) {
            throw new emailError_1.default("Endereço de e-mail inválido");
        }
        this.email = email;
    }
    alterarTipoEmail(tipoEmail) {
        this.tipoEmail = tipoEmail;
    }
    obterId() {
        return this.id;
    }
    obterEmail() {
        return this.email;
    }
    obterTipoEmail() {
        return this.tipoEmail;
    }
    isValido() {
        return email_validator_1.default.validate(this.obterEmail());
    }
}
exports.default = Email;
//# sourceMappingURL=email.js.map