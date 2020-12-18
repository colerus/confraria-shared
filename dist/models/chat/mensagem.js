"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class Mensagem extends id_1.default {
    constructor(props) {
        super(props);
        this.chat = props.chat;
        this.tipoOrigemMensagem = props.tipoOrigemMensagem;
        this.mensagem = props.mensagem;
        this.timestamp = props.timestamp;
        this.status = props.status;
    }
    alterarStatus(status) {
        this.status = status;
    }
    obterChat() {
        return this.chat;
    }
    obterTipoOrigemMensagem() {
        return this.tipoOrigemMensagem;
    }
    obterMensagem() {
        return this.mensagem;
    }
    obterTimestamp() {
        return this.timestamp;
    }
    obterStatus() {
        return this.status;
    }
    isValido() {
        return (this.chat !== undefined &&
            this.tipoOrigemMensagem !== undefined &&
            this.mensagem.trim().length > 0 &&
            this.timestamp > 0 &&
            this.status !== undefined);
    }
}
exports.default = Mensagem;
//# sourceMappingURL=mensagem.js.map