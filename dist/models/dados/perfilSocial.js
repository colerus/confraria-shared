"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const _1 = require(".");
const id_1 = tslib_1.__importDefault(require("../id"));
let PerfilSocial = class PerfilSocial extends id_1.default {
    constructor(props) {
        super();
        this.perfil = props.perfil;
    }
    isValido() {
        return true;
    }
};
tslib_1.__decorate([
    typeorm_1.OneToOne(() => _1.Perfil, (perfil) => perfil.dadosPessoais),
    tslib_1.__metadata("design:type", _1.Perfil)
], PerfilSocial.prototype, "perfil", void 0);
PerfilSocial = tslib_1.__decorate([
    typeorm_1.Entity("perfil_social"),
    tslib_1.__metadata("design:paramtypes", [Object])
], PerfilSocial);
exports.default = PerfilSocial;
//# sourceMappingURL=perfilSocial.js.map