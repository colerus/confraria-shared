import Id from "../id";
import Bairro from "./bairro";
import PropsCidade from "../../interfaces/models/dados/propsCidade";
import Estado from "./estado";
export default class Cidade extends Id {
    nome: string;
    estado: Estado;
    bairros: Bairro[];
    constructor(props: PropsCidade);
    isValido(): boolean;
}
//# sourceMappingURL=cidade.d.ts.map