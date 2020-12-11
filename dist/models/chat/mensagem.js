"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const id_1 = tslib_1.__importDefault(require("../id"));
const chat_1 = tslib_1.__importDefault(require("./chat"));
const tipoOrigemMensagem_1 = tslib_1.__importDefault(require("../../tipos/tipoOrigemMensagem"));
const statusMensagem_1 = tslib_1.__importDefault(require("../../tipos/statusMensagem"));
let Mensagem = class Mensagem extends id_1.default {
    constructor(props) {
        super();
        this.id = props.id;
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
};
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => chat_1.default, (chat) => chat.mensagens),
    tslib_1.__metadata("design:type", chat_1.default)
], Mensagem.prototype, "chat", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Mensagem.prototype, "tipoOrigemMensagem", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Mensagem.prototype, "mensagem", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Mensagem.prototype, "timestamp", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Mensagem.prototype, "status", void 0);
Mensagem = tslib_1.__decorate([
    typeorm_1.Entity("mensagem"),
    tslib_1.__metadata("design:paramtypes", [Object])
], Mensagem);
exports.default = Mensagem;
//# sourceMappingURL=mensagem.js.map