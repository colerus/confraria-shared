import { TipoTermoBusca } from "../../../tipos";
import TermoBusca from "../../../models/busca/termoBusca";
import PropsId from "../propsId";
export default interface PropsTermo extends PropsId {
    tipoTermo: TipoTermoBusca;
    valor: string;
    termoBuscas: TermoBusca[];
}
//# sourceMappingURL=propsTermo.d.ts.map