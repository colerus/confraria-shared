"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterParaEmail = void 0;
const tslib_1 = require("tslib");
const email_1 = tslib_1.__importDefault(require("../models/dados/email"));
const tipoEmail_1 = tslib_1.__importDefault(require("../tipos/tipoEmail"));
const converterParaEmail = (email, tipoEmail) => {
    if (email instanceof email_1.default) {
        return email;
    }
    let mail;
    if (typeof email === "string") {
        mail = new email_1.default({
            email: email,
            tipoEmail: tipoEmail || tipoEmail_1.default.INDEFINIDO,
        });
    }
    else {
        mail = new email_1.default(email);
    }
    return mail;
};
exports.converterParaEmail = converterParaEmail;
//# sourceMappingURL=email.js.map