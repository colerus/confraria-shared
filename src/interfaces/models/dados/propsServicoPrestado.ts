import Servico from "../../../base/models/dados/servico";

export default interface PropsServicoPrestado {
    id?: string;
    servico: Servico;
    faixaPrecoInicial: number;
    faixaPrecoFinal: number;
}