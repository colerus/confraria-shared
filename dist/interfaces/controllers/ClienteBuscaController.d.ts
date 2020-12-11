import Busca from "../../models/busca/busca";
import SalaBusca from "../../models/chat/salaBusca";
export default interface ClienteBuscaController {
    enviarNovaBusca(busca: Busca): SalaBusca;
    cancelarBusca(busca: Busca): void;
}
//# sourceMappingURL=ClienteBuscaController.d.ts.map