"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class Cidade extends id_1.default {
    constructor(props) {
        super(props);
        this.nome = props.nome;
        this.estado = props.estado;
        this.bairros = props.bairros;
    }
    isValido() {
        return (this.nome.trim().length > 1 &&
            this.estado !== undefined &&
            this.bairros !== undefined);
    }
}
exports.default = Cidade;
//# sourceMappingURL=cidade.js.map