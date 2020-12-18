"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class Estado extends id_1.default {
    constructor(props) {
        super(props);
        this.nome = props.nome;
        this.sigla = props.sigla;
        this.pais = props.pais;
        this.cidades = props.cidades;
    }
    isValido() {
        return (this.nome.trim().length > 2 &&
            this.sigla.trim().length === 2 &&
            this.pais !== undefined &&
            this.cidades !== undefined);
    }
}
exports.default = Estado;
//# sourceMappingURL=estado.js.map