import TipoOperacaoTermoBusca from "../../tipos/tipoOperacaoTermoBusca";
import PropsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import Id from "../id";
import Busca from "./busca";
import Termo from "./termo";
export default class TermoBusca extends Id {
    busca: Busca;
    tipoOperacao: TipoOperacaoTermoBusca;
    termo: Termo;
    constructor(termo: PropsTermoBusca);
    isValido(): boolean;
}
//# sourceMappingURL=termoBusca.d.ts.map