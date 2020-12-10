import Busca from "../../base/models/busca/busca";
import SalaBusca from "../../base/models/chat/salaBusca";

export default interface ClienteBuscaController {
    enviarNovaBusca(busca: Busca): SalaBusca;
    cancelarBusca(busca: Busca): void;
}