"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tipoEndereco_1 = tslib_1.__importDefault(require("../../tipos/tipoEndereco"));
const id_1 = tslib_1.__importDefault(require("../id"));
class Endereco extends id_1.default {
    constructor(dados, tipoEndereco) {
        super();
        this.id = dados.id;
        this.tipoLogradouro = dados.tipoLogradouro;
        this.logradouro = dados.logradouro;
        this.numero = dados.numero;
        this.complemento = dados.complemento;
        this.codigoPostal = dados.codigoPostal;
        this.cidade = dados.cidade;
        this.estado = dados.estado;
        this.pais = dados.pais;
        this.referencia = dados.referencia;
        this.tipoEndereco = tipoEndereco;
    }
    alterarId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    alterarTipoLogradouro(tipoLogradouro) {
        this.tipoLogradouro = tipoLogradouro;
    }
    alterarLogradouro(logradouro) {
        this.logradouro = logradouro;
    }
    alterarNumero(numero) {
        this.numero = numero;
    }
    alterarComplemento(complemento) {
        this.complemento = complemento;
    }
    alterarCodigoPostal(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
    alterarCidade(cidade) {
        this.cidade = cidade;
    }
    alterarEstado(estado) {
        this.estado = estado;
    }
    alterarPais(pais) {
        this.pais = pais;
    }
    alterarReferencia(referencia) {
        this.referencia = referencia;
    }
    alterarTipoEndereco(tipoEndereco) {
        this.tipoEndereco = tipoEndereco;
    }
    obterId() {
        return this.id;
    }
    obterTipoLogradouro() {
        return this.tipoLogradouro;
    }
    obterLogradouro() {
        return this.logradouro;
    }
    obterNumero() {
        return this.numero;
    }
    obterComplemento() {
        return this.complemento;
    }
    obterCodigoPostal() {
        return this.codigoPostal;
    }
    obterCidade() {
        return this.cidade;
    }
    obterEstado() {
        return this.estado;
    }
    obterPais() {
        return this.pais;
    }
    obterReferencia() {
        return this.referencia;
    }
    obterTipoEndereco() {
        return this.tipoEndereco;
    }
    static validar(endereco) {
        return endereco instanceof Endereco
            ? endereco.isValido()
            : new Endereco(endereco, tipoEndereco_1.default.INDEFINIDO).isValido();
    }
    isValido() {
        return (this.isLogradouroValido() &&
            this.isCidadeValida() &&
            this.isEstadoValido() &&
            this.isPaisValido());
    }
    isLogradouroValido() {
        return this.logradouro.length > 0;
    }
    isCidadeValida() {
        return this.cidade.length > 3;
    }
    isEstadoValido() {
        return this.estado.length >= 2;
    }
    isPaisValido() {
        return this.pais.length >= 2;
    }
}
exports.default = Endereco;
//# sourceMappingURL=endereco.js.map