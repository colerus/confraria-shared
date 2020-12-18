"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const perfil_1 = tslib_1.__importDefault(require("./perfil"));
const tipoPerfil_1 = tslib_1.__importDefault(require("../../tipos/tipoPerfil"));
class PerfilPrestador extends perfil_1.default {
    constructor(perfil) {
        super(Object.assign(Object.assign({}, perfil), { tipoPerfil: tipoPerfil_1.default.USUARIO }));
        this.servicos = perfil.servicosPrestados;
    }
    adicionarServicoPrestado(servico) {
        this.servicos.push(servico);
    }
    removerServicoPrestado(servico) {
        const index = this.servicos.indexOf(servico);
        if (index >= 0) {
            this.servicos.splice(index, 1);
        }
    }
    obterServicosPrestados() {
        return this.servicos;
    }
    isValido() {
        return super.isValido() && this.isServicosValidos();
    }
    isServicosValidos() {
        return this.servicos && this.servicos.length > 0 ? true : false;
    }
}
exports.default = PerfilPrestador;
//# sourceMappingURL=perfilPrestador.js.map