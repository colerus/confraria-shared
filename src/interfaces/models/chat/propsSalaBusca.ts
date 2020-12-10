import Busca from "../../../base/models/busca/busca";
import Chat from "../../../base/models/chat/chat";

export default interface PropsSalaBusca {
    id?: string;
    busca: Busca;
    chats?: Chat[];
}