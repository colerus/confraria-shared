import Mensagem from "../../../models/chat/mensagem";
import SalaBusca from "../../../models/chat/salaBusca";
import { PerfilPrestador } from "../../../models/dados";

export default interface PropsChat {
  id?: string;
  salaBusca: SalaBusca;
  prestador: PerfilPrestador;
  mensagens?: Mensagem[];
  ativo?: boolean;
}
