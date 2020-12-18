import TermoBusca from "../../../models/busca/termoBusca";
import PerfilCliente from "../../../models/dados/perfilCliente";
import SalaBusca from "../../../models/chat/salaBusca";
import PropsId from "../propsId";

export default interface PropsBusca extends PropsId {
  cliente: PerfilCliente;
  termos: TermoBusca[];
  dataInicio?: Date;
  salas?: SalaBusca[];
}
