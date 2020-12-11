import TipoOperacaoTermoBusca from "../../tipos/tipoOperacaoTermoBusca";
import PropsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import propsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import Id from "../id";
import Busca from "./busca";
import Termo from "./termo";
export default class TermoBusca extends Id {
    busca: Busca;
    tipoOperacao: TipoOperacaoTermoBusca;
    termo: Termo;
    constructor(termo: PropsTermoBusca);
    definirId(id?: string): void;
    definirBusca(busca: Busca): void;
    alterarTipoOperacao(tipo: TipoOperacaoTermoBusca): void;
    obterId(): any;
    obterBusca(): Busca;
    obterTipoOperacao(): TipoOperacaoTermoBusca;
    static validar(termo: TermoBusca | propsTermoBusca): boolean;
    isValido(): boolean;
}
//# sourceMappingURL=termoBusca.d.ts.map