"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularIdade = exports.calcularDiferencaDatasAteHoje = exports.calcularDiferencaEntreDatas = void 0;
const calcularDiferencaEntreDatas = (data1, data2) => {
    const diffTime = Math.abs(data2.getTime() - data1.getTime());
    const data = new Date(diffTime);
    return data;
};
exports.calcularDiferencaEntreDatas = calcularDiferencaEntreDatas;
const calcularDiferencaDatasAteHoje = (data) => {
    const data2 = new Date();
    data2.setHours(23);
    data2.setMinutes(59);
    data2.setSeconds(59);
    data2.setMilliseconds(999);
    const diffTime = Math.abs(data2.getTime() - data.getTime());
    const diffDate = new Date(diffTime);
    return diffDate;
};
exports.calcularDiferencaDatasAteHoje = calcularDiferencaDatasAteHoje;
const calcularIdade = (dataNascimento) => {
    const idade = exports.calcularDiferencaDatasAteHoje(dataNascimento).getFullYear() - 1970;
    return idade;
};
exports.calcularIdade = calcularIdade;
//# sourceMappingURL=data.js.map