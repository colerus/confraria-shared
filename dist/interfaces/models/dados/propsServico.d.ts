import Servico from "../../../models/dados/servico";
import PropsId from "../propsId";
export default interface PropsServico extends PropsId {
    nome: string;
    derivacoes?: string[];
    parent?: Servico;
}
//# sourceMappingURL=propsServico.d.ts.map