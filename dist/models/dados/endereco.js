"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class Endereco extends id_1.default {
    constructor(dados) {
        super(dados);
        this.logradouro = dados.logradouro;
        this.numero = dados.numero;
        this.complemento = dados.complemento;
        this.codigoPostal = dados.codigoPostal;
        this.referencia = dados.referencia;
    }
    alterarId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    isValido() {
        return (this.logradouro !== undefined &&
            this.isCodigoPostalValido() &&
            (this.isNumeroValido() ||
                this.isComplementoValido() ||
                this.isReferenciaValido()));
    }
    isNumeroValido() {
        return this.numero !== undefined && this.numero > 0;
    }
    isComplementoValido() {
        return this.complemento !== undefined && this.complemento.trim().length > 0;
    }
    isCodigoPostalValido() {
        return (this.codigoPostal !== undefined && this.codigoPostal.trim().length > 5);
    }
    isReferenciaValido() {
        return this.referencia !== undefined && this.referencia.trim().length > 3;
    }
}
exports.default = Endereco;
//# sourceMappingURL=endereco.js.map