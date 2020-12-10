"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const uuid_1 = require("uuid");
const id_1 = tslib_1.__importDefault(require("../id"));
class DadosCadastro extends id_1.default {
    constructor(dados) {
        super();
        this.id = dados.id;
        this.dataCadastro = dados.dataCadastro || new Date();
        this.dataConfirmacao = dados.dataConfirmacao;
        this.dataEnvioLinkConfirmacao = dados.dataEnvioLinkConfirmacao;
        this.codigoConfirmacao = dados.codigoConfirmacao;
        this.dataGeracaoCodigoConfirmacao = dados.dataGeracaoCodigoConfirmacao;
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
        if (dados instanceof DadosCadastro) {
            valido = dados.obterDataCadastro().getTime() - Date.now() < 0;
        }
        else {
            const temp = new DadosCadastro(dados);
            valido = temp.isValido();
        }
        return valido;
    }
    isValido() {
        return DadosCadastro.validar(this);
    }
}
exports.default = DadosCadastro;
//# sourceMappingURL=dadosCadastro.js.map