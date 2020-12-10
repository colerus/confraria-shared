import PerfilCliente from "../../../base/models/dados/perfilCliente";
import TermoBusca from "../../../base/models/busca/termoBusca";

export default interface PropsBusca {
    id?: string;
    cliente: PerfilCliente;
    termos: TermoBusca[];
    dataInicio?: Date;
}