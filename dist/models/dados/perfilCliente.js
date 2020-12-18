"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const perfil_1 = tslib_1.__importDefault(require("./perfil"));
const tipoPerfil_1 = tslib_1.__importDefault(require("../../tipos/tipoPerfil"));
class PerfilCliente extends perfil_1.default {
    constructor(perfil) {
        super(Object.assign(Object.assign({}, perfil), { tipoPerfil: tipoPerfil_1.default.CLIENTE }));
    }
    isValido() {
        return super.isValido();
    }
}
exports.default = PerfilCliente;
//# sourceMappingURL=perfilCliente.js.map