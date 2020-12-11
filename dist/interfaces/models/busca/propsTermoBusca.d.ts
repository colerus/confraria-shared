import Busca from "../../../models/busca/busca";
import Termo from "../../../models/busca/termo";
import TipoOperacaoTermoBusca from "../../../tipos/tipoOperacaoTermoBusca";
export default interface PropsTermoBusca {
    id?: string;
    busca: Busca;
    tipoOperacao: TipoOperacaoTermoBusca;
    termo: Termo;
}
//# sourceMappingURL=propsTermoBusca.d.ts.map