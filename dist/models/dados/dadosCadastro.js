"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const uuid_1 = require("uuid");
const id_1 = tslib_1.__importDefault(require("../id"));
class DadosCadastro extends id_1.default {
    constructor(dados) {
        super(dados);
        this.dataCadastro = dados.dataCadastro || new Date();
        this.dataConfirmacao = dados.dataConfirmacao;
        this.dataEnvioLinkConfirmacao = dados.dataEnvioLinkConfirmacao;
        this.codigoConfirmacao = dados.codigoConfirmacao;
        this.dataGeracaoCodigoConfirmacao = dados.dataGeracaoCodigoConfirmacao;
        this.perfil = dados.perfil;
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
    isValido() {
        return (this.dataCadastro.getTime() <= Date.now() && this.perfil !== undefined);
    }
}
exports.default = DadosCadastro;
//# sourceMappingURL=dadosCadastro.js.map