"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const __1 = require("..");
const tipos_1 = require("../../tipos");
const typeorm_1 = require("typeorm");
const termoBusca_1 = tslib_1.__importDefault(require("./termoBusca"));
let Termo = class Termo extends __1.Id {
    constructor(termo) {
        super();
        this.id = termo.id;
        this.tipoTermo = termo.tipoTermo;
        this.valor = termo.valor;
        this.termoBuscas = termo.termoBuscas;
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Termo.prototype, "tipoTermo", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Termo.prototype, "valor", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => termoBusca_1.default, (busca) => busca.id),
    tslib_1.__metadata("design:type", Array)
], Termo.prototype, "termoBuscas", void 0);
Termo = tslib_1.__decorate([
    typeorm_1.Entity("termo"),
    tslib_1.__metadata("design:paramtypes", [Object])
], Termo);
exports.default = Termo;
//# sourceMappingURL=termo.js.map