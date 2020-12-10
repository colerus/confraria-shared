import TermoBusca from "../../../models/busca/termoBusca";
import PerfilCliente from "../../../models/dados/perfilCliente";

export default interface PropsBusca {
  id?: string;
  cliente: PerfilCliente;
  termos: TermoBusca[];
  dataInicio?: Date;
}
