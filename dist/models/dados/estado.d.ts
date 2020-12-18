import Id from "../id";
import Cidade from "./cidade";
import PropsEstado from "../../interfaces/models/dados/propsEstado";
import Pais from "./pais";
export default class Estado extends Id {
    nome: string;
    sigla: string;
    pais: Pais;
    cidades: Cidade[];
    constructor(props: PropsEstado);
    isValido(): boolean;
}
//# sourceMappingURL=estado.d.ts.map