"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class SalaBusca extends id_1.default {
    constructor(props) {
        super();
        this.id = props.id;
        this.busca = props.busca;
        this.chats = props.chats || [];
    }
    adicionarChat(chat) {
        this.chats.push(chat);
    }
    obterBusca() {
        return this.busca;
    }
    obterChats() {
        return this.chats;
    }
}
exports.default = SalaBusca;
//# sourceMappingURL=salaBusca.js.map