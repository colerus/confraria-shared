"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
const chatError_1 = tslib_1.__importDefault(require("../../exceptions/chatError"));
class Chat extends id_1.default {
    constructor(props) {
        super();
        this.id = props.id;
        this.salaBusca = props.salaBusca;
        this.idPrestador = props.idPrestador;
        this.mensagens = props.mensagens || [];
        this.ativo = props.ativo || true;
    }
    ativar() {
        this.ativo = true;
    }
    desativar() {
        this.ativo = false;
    }
    adicionarMensagem(mensagem) {
        if (mensagem.obterChat() !== this) {
            throw new chatError_1.default("Chat da mensagem é diferente");
        }
        this.mensagens.push(mensagem);
    }
    obterSalaBusca() {
        return this.salaBusca;
    }
    obterIdPrestador() {
        return this.idPrestador;
    }
    obterMensagens() {
        return this.mensagens;
    }
    isAtivo() {
        return this.ativo;
    }
}
exports.default = Chat;
//# sourceMappingURL=chat.js.map