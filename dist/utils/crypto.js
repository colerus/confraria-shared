"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparar = exports.encriptar = void 0;
const tslib_1 = require("tslib");
const bcrypt = tslib_1.__importStar(require("bcrypt"));
function encriptar(valor, rounds, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield bcrypt.hash(valor, rounds, (err, hash) => {
            callback(err, hash);
        });
    });
}
exports.encriptar = encriptar;
function comparar(valorOriginal, hash, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield bcrypt.compare(valorOriginal, hash, (_error, match) => {
            if (match)
                return callback(null, true);
            callback("Senha inválida.", false);
        });
    });
}
exports.comparar = comparar;
//# sourceMappingURL=crypto.js.map