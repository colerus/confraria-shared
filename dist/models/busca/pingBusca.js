"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const id_1 = tslib_1.__importDefault(require("../id"));
const busca_1 = tslib_1.__importDefault(require("./busca"));
let PingBusca = class PingBusca extends id_1.default {
    constructor(props) {
        super();
        this.id = props.id;
        this.busca = props.busca;
        this.timestamp = props.timestamp;
    }
    definirId(id) {
        if (this.id === undefined) {
            this.id = id;
            return true;
        }
        return false;
    }
};
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => busca_1.default, (busca) => busca.pings),
    tslib_1.__metadata("design:type", id_1.default)
], PingBusca.prototype, "busca", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], PingBusca.prototype, "timestamp", void 0);
PingBusca = tslib_1.__decorate([
    typeorm_2.Entity("ping_busca"),
    tslib_1.__metadata("design:paramtypes", [Object])
], PingBusca);
exports.default = PingBusca;
//# sourceMappingURL=pingBusca.js.map