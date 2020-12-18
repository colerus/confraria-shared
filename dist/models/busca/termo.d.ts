import { Id } from "..";
import { TipoTermoBusca } from "../../tipos";
import PropsTermo from "../../interfaces/models/busca/propsTermo";
import TermoBusca from "./termoBusca";
export default class Termo extends Id {
    tipoTermo: TipoTermoBusca;
    valor: string;
    termoBuscas: TermoBusca[];
    constructor(termo: PropsTermo);
    isValido(): boolean;
}
//# sourceMappingURL=termo.d.ts.map