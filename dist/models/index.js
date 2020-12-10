"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midia = exports.Estatisticas = exports.Dados = exports.Chat = exports.Busca = exports.Id = void 0;
const tslib_1 = require("tslib");
const id_1 = tslib_1.__importDefault(require("./id"));
exports.Id = id_1.default;
const Busca = tslib_1.__importStar(require("./busca/index"));
exports.Busca = Busca;
const Chat = tslib_1.__importStar(require("./chat/index"));
exports.Chat = Chat;
const Dados = tslib_1.__importStar(require("./dados/index"));
exports.Dados = Dados;
const Estatisticas = tslib_1.__importStar(require("./estatisticas/index"));
exports.Estatisticas = Estatisticas;
const Midia = tslib_1.__importStar(require("./midia/index"));
exports.Midia = Midia;
//# sourceMappingURL=index.js.map