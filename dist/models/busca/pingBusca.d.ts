import Id from "../id";
import PropsPingBusca from "../../interfaces/models/busca/propsPingBusca";
export default class PingBusca extends Id {
    private idBusca;
    private timestamp;
    constructor(props: PropsPingBusca);
    definirId(id?: string): boolean;
    definirIdBusca(id: Id): void;
    obterIdBusca(): Id;
    obterTimestamp(): number;
}
//# sourceMappingURL=pingBusca.d.ts.map