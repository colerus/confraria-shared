import Id from "../id";
import Estado from "./estado";
import PropsPais from "../../interfaces/models/dados/propsPais";
export default class Pais extends Id {
    nome: string;
    sigla2: string;
    sigla3: string;
    sigla4: string;
    estados: Estado[];
    constructor(props: PropsPais);
    isValido(): boolean;
}
//# sourceMappingURL=pais.d.ts.map