import Id from "../id";
import Chat from "./chat";
import TipoOrigemMensagem from "../../../tipos/tipoOrigemMensagem";
import StatusMensagem from "../../../tipos/statusMensagem";
import PropsMensagem from "../../../interfaces/models/chat/propsMensagem";

export default class Mensagem extends Id {
    private readonly chat: Chat;
    private readonly tipoOrigemMensagem: TipoOrigemMensagem;
    private readonly mensagem: string;
    private readonly timestamp: number;
    private status: StatusMensagem;

    constructor(props: PropsMensagem) {
        super();
        this.id = props.id;
        this.chat = props.chat;
        this.tipoOrigemMensagem = props.tipoOrigemMensagem;
        this.mensagem = props.mensagem;
        this.timestamp = props.timestamp;
        this.status = props.status;
    }
    alterarStatus(status: StatusMensagem) {
        this.status = status;
    }
    obterChat() {
        return this.chat;
    }
    obterTipoOrigemMensagem() {
        return this.tipoOrigemMensagem;
    }
    obterMensagem() {
        return this.mensagem;
    }
    obterTimestamp() {
        return this.timestamp;
    }
    obterStatus() {
        return this.status;
    }

}