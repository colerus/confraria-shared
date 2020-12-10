import Id from "../../../base/models/id";
import Mensagem from "../../../base/models/chat/mensagem";
import SalaBusca from "../../../base/models/chat/salaBusca";

export default interface PropsChat {
    id?: string;
    salaBusca: SalaBusca;
    idPrestador: Id;
    mensagens?: Mensagem[];
    ativo?: boolean;
}