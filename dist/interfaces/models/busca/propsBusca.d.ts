import TermoBusca from "../../../models/busca/termoBusca";
import PerfilCliente from "../../../models/dados/perfilCliente";
import SalaBusca from "../../../models/chat/salaBusca";
export default interface PropsBusca {
    id?: string;
    cliente: PerfilCliente;
    termos: TermoBusca[];
    dataInicio?: Date;
    salas?: SalaBusca[];
}
//# sourceMappingURL=propsBusca.d.ts.map