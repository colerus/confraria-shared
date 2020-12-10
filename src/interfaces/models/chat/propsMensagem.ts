import Chat from "../../../base/models/chat/chat";
import TipoOrigemMensagem from "../../../tipos/tipoOrigemMensagem";
import StatusMensagem from "../../../tipos/statusMensagem";

export default interface PropsMensagem {
    id?: string;
    chat: Chat;
    tipoOrigemMensagem: TipoOrigemMensagem;
    mensagem: string;
    timestamp: number;
    status: StatusMensagem;
}