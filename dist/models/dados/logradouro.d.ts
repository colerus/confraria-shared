import { Id } from "..";
import Bairro from "./bairro";
import TipoLogradouro from "../../tipos/tipoLogradouro";
import PropsLogradouro from "../../interfaces/models/dados/propsLogradouro";
export default class Logradouro extends Id {
    tipoLogradouro: TipoLogradouro;
    logradouro: string;
    bairro: Bairro;
    codigoPostal: string;
    constructor(props: PropsLogradouro);
    isValido(): boolean;
}
//# sourceMappingURL=logradouro.d.ts.map