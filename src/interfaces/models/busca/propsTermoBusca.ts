import TipoTermoBusca from "../../../tipos/tipoTermoBusca";
import TipoOperacaoTermoBusca from "../../../tipos/tipoOperacaoTermoBusca";
import Busca from "../../../base/models/busca/busca";

export default interface PropsTermoBusca {
    id?: string;
    busca: Busca;
    tipoTermo: TipoTermoBusca;
    tipoOperacao: TipoOperacaoTermoBusca;
    valor: string;
}