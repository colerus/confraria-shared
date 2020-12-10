import Id from "../id";
import Chat from "./chat";
import TipoOrigemMensagem from "../../tipos/tipoOrigemMensagem";
import StatusMensagem from "../../tipos/statusMensagem";
import PropsMensagem from "../../interfaces/models/chat/propsMensagem";
export default class Mensagem extends Id {
    private readonly chat;
    private readonly tipoOrigemMensagem;
    private readonly mensagem;
    private readonly timestamp;
    private status;
    constructor(props: PropsMensagem);
    alterarStatus(status: StatusMensagem): void;
    obterChat(): Chat;
    obterTipoOrigemMensagem(): TipoOrigemMensagem;
    obterMensagem(): string;
    obterTimestamp(): number;
    obterStatus(): StatusMensagem;
}
//# sourceMappingURL=mensagem.d.ts.map