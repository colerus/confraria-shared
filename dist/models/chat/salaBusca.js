"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
const busca_1 = tslib_1.__importDefault(require("../busca/busca"));
const chat_1 = tslib_1.__importDefault(require("./chat"));
const typeorm_1 = require("typeorm");
let SalaBusca = class SalaBusca extends id_1.default {
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
};
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => busca_1.default, (busca) => busca.salas),
    tslib_1.__metadata("design:type", busca_1.default)
], SalaBusca.prototype, "busca", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => chat_1.default, (chat) => chat.salaBusca),
    tslib_1.__metadata("design:type", Array)
], SalaBusca.prototype, "chats", void 0);
SalaBusca = tslib_1.__decorate([
    typeorm_1.Entity("sala_busca"),
    tslib_1.__metadata("design:paramtypes", [Object])
], SalaBusca);
exports.default = SalaBusca;
//# sourceMappingURL=salaBusca.js.map