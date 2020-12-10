import SalaBusca from "../../base/models/chat/salaBusca";
import Chat from "../../base/models/chat/chat";

export default interface PrestadorBuscaController {
    verificarBuscasNovas(): SalaBusca[];
    ofertarServico(salaBusca: SalaBusca): Chat;
    cancelarOfertaServico(chat: Chat): void;
}