export const calcularDiferencaEntreDatas = (data1: Date, data2: Date): Date => {
    const diffTime = Math.abs(data2.getTime() - data1.getTime());
    const data = new Date(diffTime);
    return data;
}

export const calcularDiferencaDatasAteHoje = (data: Date): Date => {
    const data2 = new Date();
    data2.setHours(23);
    data2.setMinutes(59);
    data2.setSeconds(59);
    data2.setMilliseconds(999);
    const diffTime = Math.abs(data2.getTime() - data.getTime());
    const diffDate = new Date(diffTime);
    return diffDate;
}

export const calcularIdade = (dataNascimento: Date): number => {
    const idade = calcularDiferencaDatasAteHoje(dataNascimento).getFullYear() - 1970;
    return idade;
}