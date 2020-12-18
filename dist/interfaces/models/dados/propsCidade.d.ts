import PropsId from "../propsId";
import Estado from "../../../models/dados/estado";
import Bairro from "../../../models/dados/bairro";
export default interface PropsCidade extends PropsId {
    nome: string;
    estado: Estado;
    bairros: Bairro[];
}
//# sourceMappingURL=propsCidade.d.ts.map