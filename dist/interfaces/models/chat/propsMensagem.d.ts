import Chat from "../../../models/chat/chat";
import StatusMensagem from "../../../tipos/statusMensagem";
import TipoOrigemMensagem from "../../../tipos/tipoOrigemMensagem";
import PropsId from "../propsId";
export default interface PropsMensagem extends PropsId {
    chat: Chat;
    tipoOrigemMensagem: TipoOrigemMensagem;
    mensagem: string;
    timestamp: number;
    status: StatusMensagem;
}
//# sourceMappingURL=propsMensagem.d.ts.map