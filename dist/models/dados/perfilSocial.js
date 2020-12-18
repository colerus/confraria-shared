"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class PerfilSocial extends id_1.default {
    constructor(props) {
        super(props);
        this.perfil = props.perfil;
    }
    isValido() {
        return true;
    }
}
exports.default = PerfilSocial;
//# sourceMappingURL=perfilSocial.js.map