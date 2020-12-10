import Busca from "../../../models/busca/busca";
import TipoOperacaoTermoBusca from "../../../tipos/tipoOperacaoTermoBusca";
import TipoTermoBusca from "../../../tipos/tipoTermoBusca";

export default interface PropsTermoBusca {
  id?: string;
  busca: Busca;
  tipoTermo: TipoTermoBusca;
  tipoOperacao: TipoOperacaoTermoBusca;
  valor: string;
}
