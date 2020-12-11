import Id from "../id";
import PropsPingBusca from "../../interfaces/models/busca/propsPingBusca";
export default class PingBusca extends Id {
    busca: Id;
    timestamp: number;
    constructor(props: PropsPingBusca);
    definirId(id?: string): boolean;
}
//# sourceMappingURL=pingBusca.d.ts.map