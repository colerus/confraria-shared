"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("../id"));
class PingBusca extends id_1.default {
    constructor(props) {
        super(props);
        this.busca = props.busca;
        this.timestamp = props.timestamp;
    }
    isValido() {
        return this.busca !== undefined && this.timestamp > 0;
    }
}
exports.default = PingBusca;
//# sourceMappingURL=pingBusca.js.map