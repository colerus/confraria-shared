"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class PingBusca extends id_1.default {
    constructor(props) {
        super();
        this.id = props.id;
        this.idBusca = props.idbusca;
        this.timestamp = props.timestamp;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
            return true;
        }
        return false;
    }
    definirIdBusca(id) {
        if (this.idBusca === undefined) {
            this.idBusca = id;
        }
    }
    obterIdBusca() {
        return this.idBusca;
    }
    obterTimestamp() {
        return this.timestamp;
    }
}
exports.default = PingBusca;
//# sourceMappingURL=pingBusca.js.map