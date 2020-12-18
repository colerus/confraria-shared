"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Id {
    constructor(props) {
        this.definirId(props.id);
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.deletedAt = props.deletedAt;
        this.version = props.version;
    }
    definirId(id) {
        if (!this.id)
            this.id = id;
    }
    obterId() {
        return this.id;
    }
    static Validar(obj) {
        return obj.isValido();
    }
}
exports.default = Id;
//# sourceMappingURL=id.js.map