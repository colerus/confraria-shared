import Id from "../id";
import Busca from "../busca/busca";
import Chat from "./chat";
import PropsSalaBusca from "../../interfaces/models/chat/propsSalaBusca";

export default class SalaBusca extends Id {
  busca: Busca;
  chats: Chat[];

  constructor(props: PropsSalaBusca) {
    super(props);
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
  isValido() {
    return this.busca !== undefined && this.chats !== undefined;
  }
}
