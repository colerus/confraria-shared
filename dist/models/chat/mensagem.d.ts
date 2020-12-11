import Id from "../id";
import Chat from "./chat";
import TipoOrigemMensagem from "../../tipos/tipoOrigemMensagem";
import StatusMensagem from "../../tipos/statusMensagem";
import PropsMensagem from "../../interfaces/models/chat/propsMensagem";
export default class Mensagem extends Id {
    chat: Chat;
    tipoOrigemMensagem: TipoOrigemMensagem;
    mensagem: string;
    timestamp: number;
    status: StatusMensagem;
    constructor(props: PropsMensagem);
    alterarStatus(status: StatusMensagem): void;
    obterChat(): Chat;
    obterTipoOrigemMensagem(): TipoOrigemMensagem;
    obterMensagem(): string;
    obterTimestamp(): number;
    obterStatus(): StatusMensagem;
}
//# sourceMappingURL=mensagem.d.ts.map