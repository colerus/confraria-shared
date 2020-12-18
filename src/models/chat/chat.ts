import Id from "../id";
import Mensagem from "./mensagem";
import PropsChat from "../../interfaces/models/chat/propsChat";
import ChatError from "../../exceptions/chatError";
import SalaBusca from "./salaBusca";
import { PerfilPrestador } from "../dados";

export default class Chat extends Id {
  salaBusca: SalaBusca;
  prestador: PerfilPrestador;
  mensagens?: Mensagem[];
  ativo: boolean;

  constructor(props: PropsChat) {
    super(props);
    this.salaBusca = props.salaBusca;
    this.prestador = props.prestador;
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
  obterPrestador() {
    return this.prestador;
  }
  obterMensagens() {
    return this.mensagens;
  }
  isAtivo() {
    return this.ativo;
  }
  isValido() {
    return this.salaBusca !== undefined && this.prestador !== undefined;
  }
}
