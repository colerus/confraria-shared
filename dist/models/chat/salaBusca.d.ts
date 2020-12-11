import Id from "../id";
import Busca from "../busca/busca";
import Chat from "./chat";
import PropsSalaBusca from "../../interfaces/models/chat/propsSalaBusca";
export default class SalaBusca extends Id {
    busca: Busca;
    chats: Chat[];
    constructor(props: PropsSalaBusca);
    adicionarChat(chat: Chat): void;
    obterBusca(): Busca;
    obterChats(): Chat[];
}
//# sourceMappingURL=salaBusca.d.ts.map