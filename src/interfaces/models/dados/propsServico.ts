import Servico from "../../../base/models/dados/servico";

export default interface PropsServico {
    id?: string;
    nome: string;
    derivacoes?: string[];
    parent?: Servico;
}