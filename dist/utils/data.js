"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularIdade = exports.calcularDiferencaDatasAteHoje = exports.calcularDiferencaEntreDatas = void 0;
exports.calcularDiferencaEntreDatas = (data1, data2) => {
    const diffTime = Math.abs(data2.getTime() - data1.getTime());
    const data = new Date(diffTime);
    return data;
};
exports.calcularDiferencaDatasAteHoje = (data) => {
    const data2 = new Date();
    data2.setHours(23);
    data2.setMinutes(59);
    data2.setSeconds(59);
    data2.setMilliseconds(999);
    const diffTime = Math.abs(data2.getTime() - data.getTime());
    const diffDate = new Date(diffTime);
    return diffDate;
};
exports.calcularIdade = (dataNascimento) => {
    const idade = exports.calcularDiferencaDatasAteHoje(dataNascimento).getFullYear() - 1970;
    return idade;
};
//# sourceMappingURL=data.js.map