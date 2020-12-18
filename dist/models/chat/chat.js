"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
const chatError_1 = tslib_1.__importDefault(require("../../exceptions/chatError"));
class Chat extends id_1.default {
    constructor(props) {
        super(props);
        this.salaBusca = props.salaBusca;
        this.prestador = props.prestador;
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
    obterPrestador() {
        return this.prestador;
    }
    obterMensagens() {
        return this.mensagens;
    }
    isAtivo() {
        return this.ativo;
    }
    isValido() {
        return this.salaBusca !== undefined && this.prestador !== undefined;
    }
}
exports.default = Chat;
//# sourceMappingURL=chat.js.map