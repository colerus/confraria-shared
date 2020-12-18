"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class Pais extends id_1.default {
    constructor(props) {
        super(props);
        this.nome = props.nome;
        this.sigla2 = props.sigla2;
        this.sigla3 = props.sigla3;
        this.sigla4 = props.sigla4;
        this.estados = props.estados;
    }
    isValido() {
        return (this.nome.trim().length > 3 &&
            this.sigla2.trim().length === 2 &&
            this.sigla3.trim().length === 3 &&
            this.sigla4.trim().length === 4);
    }
}
exports.default = Pais;
//# sourceMappingURL=pais.js.map