import { TipoTermoBusca } from "../../../tipos";
import TermoBusca from "../../../models/busca/termoBusca";

export default interface PropsTermo {
  id?: string;
  tipoTermo: TipoTermoBusca;
  valor: string;
  termoBuscas: TermoBusca[];
}
