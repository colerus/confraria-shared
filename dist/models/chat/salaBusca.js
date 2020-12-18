"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class SalaBusca extends id_1.default {
    constructor(props) {
        super(props);
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
    isValido() {
        return this.busca !== undefined && this.chats !== undefined;
    }
}
exports.default = SalaBusca;
//# sourceMappingURL=salaBusca.js.map