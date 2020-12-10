"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterParaTelefone = exports.converterParaPhoneNumber = exports.validarTelefone = void 0;
const tslib_1 = require("tslib");
const telefone_1 = tslib_1.__importDefault(require("../models/dados/telefone"));
const awesome_phonenumber_1 = tslib_1.__importDefault(require("awesome-phonenumber"));
const tipoTelefone_1 = tslib_1.__importDefault(require("../tipos/tipoTelefone"));
const tipoFuncaoTelefone_1 = tslib_1.__importDefault(require("../tipos/tipoFuncaoTelefone"));
exports.validarTelefone = (telefone) => {
    if (!(telefone instanceof awesome_phonenumber_1.default)) {
        return exports.converterParaPhoneNumber(telefone).isValid();
    }
    return telefone.isValid();
};
exports.converterParaPhoneNumber = (telefone) => {
    if (telefone instanceof awesome_phonenumber_1.default) {
        return telefone;
    }
    if (telefone instanceof telefone_1.default || typeof telefone === "string") {
        const phone = new awesome_phonenumber_1.default(telefone.toString());
        return phone;
    }
    const tel = new telefone_1.default(telefone);
    return exports.converterParaPhoneNumber(tel);
};
exports.converterParaTelefone = (telefone) => {
    if (telefone instanceof telefone_1.default) {
        return telefone;
    }
    const phone = exports.converterParaPhoneNumber(telefone);
    const dadosTelefone = {
        codigoPais: phone.getCountryCode(),
        numero: phone.getNumber(),
        tipoTelefone: phone.isMobile() ? tipoTelefone_1.default.CELULAR : tipoTelefone_1.default.FIXO,
        tipoFuncao: tipoFuncaoTelefone_1.default.INDEFINIDO,
    };
    return new telefone_1.default(dadosTelefone);
};
//# sourceMappingURL=telefone.js.map