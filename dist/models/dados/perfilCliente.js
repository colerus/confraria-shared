"use strict";
var PerfilCliente_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const perfil_1 = tslib_1.__importDefault(require("./perfil"));
const tipoPerfil_1 = tslib_1.__importDefault(require("../../tipos/tipoPerfil"));
const typeorm_1 = require("typeorm");
let PerfilCliente = PerfilCliente_1 = class PerfilCliente extends perfil_1.default {
    constructor(perfil) {
        super(Object.assign(Object.assign({}, perfil), { tipoPerfil: tipoPerfil_1.default.CLIENTE }));
    }
    static validar(perfil) {
        let valido = perfil_1.default.validar(perfil);
        if (!(perfil instanceof PerfilCliente_1)) {
            const temp = new PerfilCliente_1(perfil);
            valido = valido && temp.isValido();
        }
        return valido;
    }
    isValido() {
        return PerfilCliente_1.validar(this);
    }
};
PerfilCliente = PerfilCliente_1 = tslib_1.__decorate([
    typeorm_1.ChildEntity(tipoPerfil_1.default.CLIENTE),
    tslib_1.__metadata("design:paramtypes", [Object])
], PerfilCliente);
exports.default = PerfilCliente;
//# sourceMappingURL=perfilCliente.js.map