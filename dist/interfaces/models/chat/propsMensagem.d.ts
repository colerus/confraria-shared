import Chat from "../../../models/chat/chat";
import StatusMensagem from "../../../tipos/statusMensagem";
import TipoOrigemMensagem from "../../../tipos/tipoOrigemMensagem";
export default interface PropsMensagem {
    id?: string;
    chat: Chat;
    tipoOrigemMensagem: TipoOrigemMensagem;
    mensagem: string;
    timestamp: number;
    status: StatusMensagem;
}
//# sourceMappingURL=propsMensagem.d.ts.map