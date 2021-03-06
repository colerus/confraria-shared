import PerfilCliente from "../dados/perfilCliente";
import TermoBusca from "./termoBusca";
import PropsBusca from "../../interfaces/models/busca/propsBusca";
import propsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import PropsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import Id from "../id";
import { PingBusca } from ".";
import { SalaBusca } from "../chat";
export default class Busca extends Id {
    cliente: PerfilCliente;
    termos: TermoBusca[];
    dataInicio: Date;
    pings?: PingBusca[];
    salas?: SalaBusca[];
    constructor(busca: PropsBusca);
    adicionarTermo(termo: TermoBusca | propsTermoBusca): void;
    removerTermo(termoBusca: TermoBusca | PropsTermoBusca): void;
    isValido(): boolean;
}
//# sourceMappingURL=busca.d.ts.map