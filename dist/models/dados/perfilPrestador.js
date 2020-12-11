"use strict";
var PerfilPrestador_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const perfil_1 = tslib_1.__importDefault(require("./perfil"));
const servicoPrestado_1 = tslib_1.__importDefault(require("./servicoPrestado"));
const tipoPerfil_1 = tslib_1.__importDefault(require("../../tipos/tipoPerfil"));
const typeorm_1 = require("typeorm");
let PerfilPrestador = PerfilPrestador_1 = class PerfilPrestador extends perfil_1.default {
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
    static validar(perfil) {
        return perfil instanceof PerfilPrestador_1
            ? perfil.isValido()
            : new PerfilPrestador_1(perfil).isValido();
    }
    isValido() {
        return super.isValido() && this.isServicosValidos();
    }
    isServicosValidos() {
        return this.servicos.every((current) => current.isValido()) || false;
    }
};
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => servicoPrestado_1.default, (servico) => servico.perfis),
    tslib_1.__metadata("design:type", Array)
], PerfilPrestador.prototype, "servicos", void 0);
PerfilPrestador = PerfilPrestador_1 = tslib_1.__decorate([
    typeorm_1.ChildEntity(tipoPerfil_1.default.USUARIO),
    tslib_1.__metadata("design:paramtypes", [Object])
], PerfilPrestador);
exports.default = PerfilPrestador;
//# sourceMappingURL=perfilPrestador.js.map