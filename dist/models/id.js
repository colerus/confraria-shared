"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class Id {
    definirId(id) {
        if (!this.id)
            this.id = id;
    }
    obterId() {
        return this.id;
    }
}
tslib_1.__decorate([
    typeorm_1.PrimaryColumn(),
    tslib_1.__metadata("design:type", Object)
], Id.prototype, "id", void 0);
exports.default = Id;
//# sourceMappingURL=id.js.map