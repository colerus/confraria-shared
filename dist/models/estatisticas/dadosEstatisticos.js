"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tipoOrigem_1 = tslib_1.__importDefault(require("../../tipos/tipoOrigem"));
const tipoDadoEstatistico_1 = tslib_1.__importDefault(require("../../tipos/tipoDadoEstatistico"));
const id_1 = tslib_1.__importDefault(require("../id"));
const typeorm_1 = require("typeorm");
let DadosEstatisticos = class DadosEstatisticos extends id_1.default {
    constructor(dados, tipoDadoEstatistico) {
        super();
        this.peso = dados.peso;
        this.data = dados.data;
        this.origem = dados.origem;
        this.tipoOrigem = dados.tipoOrigem;
        this.tipoDadoEstatistico = tipoDadoEstatistico;
    }
    obterId() {
        return this.id;
    }
    obterPeso() {
        return this.peso;
    }
    obterData() {
        return this.data;
    }
    obterOrigem() {
        return this.origem;
    }
    obterTipoOrigem() {
        return this.tipoOrigem;
    }
    obterTipoDadoEstatistico() {
        return this.tipoDadoEstatistico;
    }
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], DadosEstatisticos.prototype, "peso", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], DadosEstatisticos.prototype, "data", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], DadosEstatisticos.prototype, "origem", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], DadosEstatisticos.prototype, "tipoOrigem", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], DadosEstatisticos.prototype, "tipoDadoEstatistico", void 0);
DadosEstatisticos = tslib_1.__decorate([
    typeorm_1.Entity("dados_estatisticos"),
    typeorm_1.TableInheritance({
        column: { name: "tipoDadosEstatisticos", type: "varchar" },
    }),
    tslib_1.__metadata("design:paramtypes", [Object, Number])
], DadosEstatisticos);
exports.default = DadosEstatisticos;
//# sourceMappingURL=dadosEstatisticos.js.map