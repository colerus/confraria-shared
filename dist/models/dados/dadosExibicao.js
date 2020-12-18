"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class DadosExibicao extends id_1.default {
    constructor(dados) {
        super(dados);
        this.nomeCurto = dados.nomeCurto;
        this.nomeComercial = dados.nomeComercial;
        this.fotoPerfil = dados.fotoPerfil;
        this.perfil = dados.perfil;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    alterarNomeCurto(nome) {
        this.nomeCurto = nome;
    }
    alterarNomeComercial(nome) {
        this.nomeComercial = nome;
    }
    alterarFotoPerfil(foto) {
        this.fotoPerfil = foto;
    }
    obterId() {
        return this.id;
    }
    obterNomeCurto() {
        return this.nomeCurto;
    }
    obterNomeComercial() {
        return this.nomeComercial;
    }
    obterFoto() {
        return this.fotoPerfil;
    }
    isValido() {
        return this.nomeCurto.trim.length > 1 && this.perfil !== undefined;
    }
}
exports.default = DadosExibicao;
//# sourceMappingURL=dadosExibicao.js.map