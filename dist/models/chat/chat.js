"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
const mensagem_1 = tslib_1.__importDefault(require("./mensagem"));
const chatError_1 = tslib_1.__importDefault(require("../../exceptions/chatError"));
const salaBusca_1 = tslib_1.__importDefault(require("./salaBusca"));
const typeorm_1 = require("typeorm");
const dados_1 = require("../dados");
let Chat = class Chat extends id_1.default {
    constructor(props) {
        super();
        this.id = props.id;
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
};
tslib_1.__decorate([
    typeorm_1.OneToMany(() => salaBusca_1.default, (sala) => sala.chats),
    tslib_1.__metadata("design:type", salaBusca_1.default)
], Chat.prototype, "salaBusca", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => dados_1.PerfilPrestador),
    tslib_1.__metadata("design:type", dados_1.PerfilPrestador)
], Chat.prototype, "prestador", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => mensagem_1.default, (msg) => msg.chat),
    tslib_1.__metadata("design:type", Array)
], Chat.prototype, "mensagens", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Chat.prototype, "ativo", void 0);
Chat = tslib_1.__decorate([
    typeorm_1.Entity("chat"),
    tslib_1.__metadata("design:paramtypes", [Object])
], Chat);
exports.default = Chat;
//# sourceMappingURL=chat.js.map