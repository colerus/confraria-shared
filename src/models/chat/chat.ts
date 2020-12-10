import Id from "../id";
import Mensagem from "./mensagem";
import PropsChat from "../../interfaces/models/chat/propsChat";
import ChatError from "../../exceptions/chatError";
import SalaBusca from "./salaBusca";

export default class Chat extends Id {
  private readonly salaBusca: SalaBusca;
  private readonly idPrestador: Id;
  private readonly mensagens?: Mensagem[];
  private ativo: boolean;

  constructor(props: PropsChat) {
    super();
    this.id = props.id;
    this.salaBusca = props.salaBusca;
    this.idPrestador = props.idPrestador;
    this.mensagens = props.mensagens || [];
    this.ativo = props.ativo || true;
  }
  ativar() {
    this.ativo = true;
  }
  desativar() {
    this.ativo = false;
  }
  adicionarMensagem(mensagem: Mensagem) {
    if (mensagem.obterChat() !== this) {
      throw new ChatError("Chat da mensagem é diferente");
    }
    this.mensagens!.push(mensagem);
  }
  obterSalaBusca() {
    return this.salaBusca;
  }
  obterIdPrestador() {
    return this.idPrestador;
  }
  obterMensagens() {
    return this.mensagens;
  }
  isAtivo() {
    return this.ativo;
  }
}
