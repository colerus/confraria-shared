import Id from "../id";
import PropsPingBusca from "../../interfaces/models/busca/propsPingBusca";
import Busca from "./busca";
export default class PingBusca extends Id {
    busca: Busca;
    timestamp: number;
    constructor(props: PropsPingBusca);
    isValido(): boolean;
}
//# sourceMappingURL=pingBusca.d.ts.map