import Chat from "../../models/chat/chat";
import SalaBusca from "../../models/chat/salaBusca";
export default interface PrestadorBuscaController {
    verificarBuscasNovas(): SalaBusca[];
    ofertarServico(salaBusca: SalaBusca): Chat;
    cancelarOfertaServico(chat: Chat): void;
}
//# sourceMappingURL=PrestadorBuscaController.d.ts.map