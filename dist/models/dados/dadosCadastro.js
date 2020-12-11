"use strict";
var DadosCadastro_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const id_1 = tslib_1.__importDefault(require("../id"));
const perfil_1 = tslib_1.__importDefault(require("./perfil"));
let DadosCadastro = DadosCadastro_1 = class DadosCadastro extends id_1.default {
    constructor(dados) {
        super();
        this.id = dados.id;
        this.dataCadastro = dados.dataCadastro || new Date();
        this.dataConfirmacao = dados.dataConfirmacao;
        this.dataEnvioLinkConfirmacao = dados.dataEnvioLinkConfirmacao;
        this.codigoConfirmacao = dados.codigoConfirmacao;
        this.dataGeracaoCodigoConfirmacao = dados.dataGeracaoCodigoConfirmacao;
        this.perfil = dados.perfil;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    definirDataConfirmacao(data) {
        if (this.dataConfirmacao === undefined) {
            this.dataConfirmacao = data;
        }
    }
    definirDataEnvioLinkConfirmacao(data) {
        this.dataEnvioLinkConfirmacao = data;
    }
    obterId() {
        return this.id;
    }
    obterDataCadastro() {
        return this.dataCadastro;
    }
    obterDataConfirmacao() {
        return this.dataConfirmacao;
    }
    obterDataEnvioLinkConfirmacao() {
        return this.dataEnvioLinkConfirmacao;
    }
    obterCodigoConfirmacao() {
        return this.codigoConfirmacao;
    }
    obterDataGeracaoCodigoConfirmacao() {
        return this.dataGeracaoCodigoConfirmacao;
    }
    gerarNovoCodigoConfirmacao() {
        if (this.dataConfirmacao !== undefined) {
            return;
        }
        this.dataEnvioLinkConfirmacao = undefined;
        this.codigoConfirmacao = uuid_1.v4();
        this.dataGeracaoCodigoConfirmacao = new Date();
    }
    static validar(dados) {
        let valido;
        if (dados instanceof DadosCadastro_1) {
            valido = dados.obterDataCadastro().getTime() - Date.now() < 0;
        }
        else {
            const temp = new DadosCadastro_1(dados);
            valido = temp.isValido();
        }
        return valido;
    }
    isValido() {
        return DadosCadastro_1.validar(this);
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], DadosCadastro.prototype, "dataCadastro", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], DadosCadastro.prototype, "dataConfirmacao", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], DadosCadastro.prototype, "dataEnvioLinkConfirmacao", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], DadosCadastro.prototype, "dataGeracaoCodigoConfirmacao", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], DadosCadastro.prototype, "codigoConfirmacao", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(() => perfil_1.default, (perfil) => perfil.dadosPessoais),
    tslib_1.__metadata("design:type", perfil_1.default)
], DadosCadastro.prototype, "perfil", void 0);
DadosCadastro = DadosCadastro_1 = tslib_1.__decorate([
    typeorm_1.Entity("dados_cadastro"),
    tslib_1.__metadata("design:paramtypes", [Object])
], DadosCadastro);
exports.default = DadosCadastro;
//# sourceMappingURL=dadosCadastro.js.map