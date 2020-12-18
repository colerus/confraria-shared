"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Logradouro extends __1.Id {
    constructor(props) {
        super(props);
        this.tipoLogradouro = props.tipoLogradouro;
        this.logradouro = props.logradouro;
        this.bairro = props.bairro;
        this.codigoPostal = props.codigoPostal;
    }
    isValido() {
        return (this.tipoLogradouro !== undefined &&
            this.logradouro.trim().length > 0 &&
            this.bairro !== undefined &&
            this.codigoPostal.trim.length > 5);
    }
}
exports.default = Logradouro;
//# sourceMappingURL=logradouro.js.map