import PerfilCliente from "../dados/perfilCliente";
import TermoBusca from "./termoBusca";
import PropsBusca from "../../interfaces/models/busca/propsBusca";
import propsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import PropsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import Id from "../id";
export default class Busca extends Id {
    private cliente;
    private termos;
    private dataInicio;
    constructor(busca: PropsBusca);
    definirId(id?: string): void;
    adicionarTermo(termo: TermoBusca | propsTermoBusca): void;
    removerTermo(termoBusca: TermoBusca | PropsTermoBusca): void;
    obterId(): any;
    obterCliente(): PerfilCliente;
    obterTermos(): TermoBusca[];
    obterData(): Date;
}
//# sourceMappingURL=busca.d.ts.map