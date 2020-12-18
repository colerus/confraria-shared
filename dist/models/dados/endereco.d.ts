import PropsEndereco from "../../interfaces/models/dados/propsEndereco";
import Id from "../id";
import Logradouro from "./logradouro";
export default class Endereco extends Id {
    logradouro: Logradouro;
    numero?: number;
    complemento?: string;
    codigoPostal?: string;
    referencia?: string;
    constructor(dados: PropsEndereco);
    alterarId(id?: string): void;
    isValido(): boolean;
    private isNumeroValido;
    private isComplementoValido;
    private isCodigoPostalValido;
    private isReferenciaValido;
}
//# sourceMappingURL=endereco.d.ts.map