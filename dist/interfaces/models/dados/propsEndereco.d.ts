import PropsId from "../propsId";
import Logradouro from "../../../models/dados/logradouro";
export default interface PropsEndereco extends PropsId {
    logradouro: Logradouro;
    numero?: number;
    complemento?: string;
    codigoPostal?: string;
    referencia?: string;
}
//# sourceMappingURL=propsEndereco.d.ts.map