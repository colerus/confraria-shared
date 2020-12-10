import Mensagem from "../../../models/chat/mensagem";
import SalaBusca from "../../../models/chat/salaBusca";
import Id from "../../../models/id";

export default interface PropsChat {
  id?: string;
  salaBusca: SalaBusca;
  idPrestador: Id;
  mensagens?: Mensagem[];
  ativo?: boolean;
}
