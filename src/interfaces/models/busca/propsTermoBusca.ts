import Busca from "../../../models/busca/busca";
import Termo from "../../../models/busca/termo";
import TipoOperacaoTermoBusca from "../../../tipos/tipoOperacaoTermoBusca";
import PropsId from "../propsId";

export default interface PropsTermoBusca extends PropsId {
  busca: Busca;
  tipoOperacao: TipoOperacaoTermoBusca;
  termo: Termo;
}
