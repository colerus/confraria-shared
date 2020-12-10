import TipoTermoBusca from "../../tipos/tipoTermoBusca";
import TipoOperacaoTermoBusca from "../../tipos/tipoOperacaoTermoBusca";
import PropsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import propsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import Id from "../id";
import Busca from "./busca";
export default class TermoBusca extends Id {
    private busca;
    private tipoTermo;
    private tipoOperacao;
    private valor;
    constructor(termo: PropsTermoBusca);
    definirId(id?: string): void;
    definirBusca(busca: Busca): void;
    alterarTipoTermo(tipo: TipoTermoBusca): void;
    alterarTipoOperacao(tipo: TipoOperacaoTermoBusca): void;
    alterarValor(valor: string): void;
    obterId(): any;
    obterBusca(): Busca;
    obterTipoTermo(): TipoTermoBusca;
    obterTipoOperacao(): TipoOperacaoTermoBusca;
    obterValor(): string;
    static validar(termo: TermoBusca | propsTermoBusca): boolean;
    isValido(): boolean;
}
//# sourceMappingURL=termoBusca.d.ts.map