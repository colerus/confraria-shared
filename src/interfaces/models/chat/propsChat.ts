import Mensagem from "../../../models/chat/mensagem";
import SalaBusca from "../../../models/chat/salaBusca";
import { PerfilPrestador } from "../../../models/dados";
import PropsId from "../propsId";

export default interface PropsChat extends PropsId {
  salaBusca: SalaBusca;
  prestador: PerfilPrestador;
  mensagens?: Mensagem[];
  ativo?: boolean;
}
