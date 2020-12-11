import Id from "../id";
import Mensagem from "./mensagem";
import PropsChat from "../../interfaces/models/chat/propsChat";
import ChatError from "../../exceptions/chatError";
import SalaBusca from "./salaBusca";
import { Entity, OneToMany, ManyToOne, Column } from "typeorm";
import { PerfilPrestador } from "../dados";

@Entity("chat")
export default class Chat extends Id {
  @OneToMany(() => SalaBusca, (sala) => sala.chats)
  salaBusca: SalaBusca;
  @ManyToOne(() => PerfilPrestador)
  prestador: PerfilPrestador;
  @OneToMany(() => Mensagem, (msg) => msg.chat)
  mensagens?: Mensagem[];
  @Column()
  ativo: boolean;

  constructor(props: PropsChat) {
    super();
    this.id = props.id;
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
}
