import PropsId from "../propsId";
import TipoLogradouro from "../../../tipos/tipoLogradouro";
import Bairro from "../../../models/dados/bairro";
export default interface PropsLogradouro extends PropsId {
    tipoLogradouro: TipoLogradouro;
    logradouro: string;
    bairro: Bairro;
    codigoPostal: string;
}
//# sourceMappingURL=propsLogradouro.d.ts.map