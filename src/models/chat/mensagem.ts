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

  constructor(props: PropsMensagem) {
    super(props);
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
  isValido() {
    return (
      this.chat !== undefined &&
      this.tipoOrigemMensagem !== undefined &&
      this.mensagem.trim().length > 0 &&
      this.timestamp > 0 &&
      this.status !== undefined
    );
  }
}
