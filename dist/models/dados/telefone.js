"use strict";
var Telefone_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tipoFuncaoTelefone_1 = tslib_1.__importDefault(require("../../tipos/tipoFuncaoTelefone"));
const tipoTelefone_1 = tslib_1.__importDefault(require("../../tipos/tipoTelefone"));
const telefone_1 = require("../../utils/telefone");
const telefoneError_1 = tslib_1.__importDefault(require("../../exceptions/telefoneError"));
const id_1 = tslib_1.__importDefault(require("../id"));
const typeorm_1 = require("typeorm");
let Telefone = Telefone_1 = class Telefone extends id_1.default {
    constructor(dados) {
        super();
        this.id = dados.id;
        this.codigoPais = dados.codigoPais;
        this.codigoArea = dados.codigoArea;
        this.numero = dados.numero;
        this.ramal = dados.ramal;
        this.tipoTelefone = dados.tipoTelefone;
        this.tipoFuncao = dados.tipoFuncao || tipoFuncaoTelefone_1.default.INDEFINIDO;
        this.whatsapp = dados.whatsapp || false;
    }
    alterarId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    alterarTelefone(telefone) {
        const phone = telefone_1.converterParaTelefone(telefone);
        if (!Telefone_1.validar(phone)) {
            throw new telefoneError_1.default("Telefone inválido");
        }
        this.codigoPais = phone.codigoPais;
        this.numero = phone.numero;
        this.codigoArea = phone.codigoArea;
        this.tipoTelefone = phone.tipoTelefone;
    }
    alterarTipoFuncao(tipoFuncao) {
        this.tipoFuncao = tipoFuncao || tipoFuncaoTelefone_1.default.INDEFINIDO;
    }
    alterarIsWhatsapp(whatsapp) {
        this.whatsapp = whatsapp;
    }
    alterarRamal(ramal) {
        this.ramal = ramal;
    }
    obterId() {
        return this.id;
    }
    obterCodigoPais() {
        return this.codigoPais;
    }
    obterCodigoArea() {
        return this.codigoArea;
    }
    obterNumero() {
        return this.numero;
    }
    obterTipoTelefone() {
        return this.tipoTelefone;
    }
    obterTipoFuncao() {
        return this.tipoFuncao;
    }
    obterRamal() {
        return this.ramal;
    }
    isWhatsapp() {
        return this.whatsapp;
    }
    toString() {
        return `+${this.codigoPais}${this.codigoArea}${this.numero}`;
    }
    toStringFormatado() {
        return telefone_1.converterParaPhoneNumber(this).getNumber("national");
    }
    static validar(telefone) {
        return telefone_1.converterParaPhoneNumber(telefone).isValid();
    }
    isValido() {
        return Telefone_1.validar(this);
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Telefone.prototype, "codigoPais", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Telefone.prototype, "codigoArea", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Telefone.prototype, "numero", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Telefone.prototype, "ramal", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Telefone.prototype, "tipoTelefone", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Telefone.prototype, "tipoFuncao", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Telefone.prototype, "whatsapp", void 0);
Telefone = Telefone_1 = tslib_1.__decorate([
    typeorm_1.Entity("telefone"),
    tslib_1.__metadata("design:paramtypes", [Object])
], Telefone);
exports.default = Telefone;
//# sourceMappingURL=telefone.js.map