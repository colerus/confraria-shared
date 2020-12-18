import { Id } from "..";
import Logradouro from "./logradouro";
import PropsBairro from "../../interfaces/models/dados/propsBairro";
import Cidade from "./cidade";
export default class Bairro extends Id {
    nome: string;
    logradouros: Logradouro[];
    codigoPostal: string;
    cidade: Cidade;
    constructor(props: PropsBairro);
    isValido(): boolean;
}
//# sourceMappingURL=bairro.d.ts.map