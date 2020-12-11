import Id from "../id";
import Busca from "../busca/busca";
import Chat from "./chat";
import PropsSalaBusca from "../../interfaces/models/chat/propsSalaBusca";
import { Entity, ManyToOne, OneToMany } from "typeorm";

@Entity("sala_busca")
export default class SalaBusca extends Id {
  @ManyToOne(() => Busca, (busca) => busca.salas)
  busca: Busca;
  @OneToMany(() => Chat, (chat) => chat.salaBusca)
  chats: Chat[];

  constructor(props: PropsSalaBusca) {
    super();
    this.id = props.id;
    this.busca = props.busca;
    this.chats = props.chats || [];
  }

  adicionarChat(chat: Chat) {
    this.chats.push(chat);
  }

  obterBusca() {
    return this.busca;
  }

  obterChats() {
    return this.chats;
  }
}
