"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Bairro extends __1.Id {
    constructor(props) {
        super(props);
        this.nome = props.nome;
        this.logradouros = props.logradouros;
        this.codigoPostal = props.codigoPostal;
        this.cidade = props.cidade;
    }
    isValido() {
        return (this.nome.trim().length > 0 &&
            this.logradouros !== undefined &&
            this.codigoPostal.trim().length > 5 &&
            this.cidade !== undefined);
    }
}
exports.default = Bairro;
//# sourceMappingURL=bairro.js.map