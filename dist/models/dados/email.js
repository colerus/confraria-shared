"use strict";
var Email_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const email_validator_1 = tslib_1.__importDefault(require("email-validator"));
const emailError_1 = tslib_1.__importDefault(require("../../exceptions/emailError"));
const id_1 = tslib_1.__importDefault(require("../id"));
const tipoEmail_1 = tslib_1.__importDefault(require("../../tipos/tipoEmail"));
const typeorm_1 = require("typeorm");
let Email = Email_1 = class Email extends id_1.default {
    constructor(dados) {
        super();
        this.email = dados.email;
        this.tipoEmail = dados.tipoEmail || tipoEmail_1.default.INDEFINIDO;
    }
    alterarId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    alterarEmail(email) {
        if (!Email_1.validar(email)) {
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
    static validar(email) {
        if (email instanceof Email_1) {
            return email_validator_1.default.validate(email.obterEmail());
        }
        return email_validator_1.default.validate(email);
    }
    isValido() {
        return Email_1.validar(this);
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Email.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Email.prototype, "tipoEmail", void 0);
Email = Email_1 = tslib_1.__decorate([
    typeorm_1.Entity("email"),
    tslib_1.__metadata("design:paramtypes", [Object])
], Email);
exports.default = Email;
//# sourceMappingURL=email.js.map