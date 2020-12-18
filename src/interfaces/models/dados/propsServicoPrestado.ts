import { PerfilPrestador } from "../../../models/dados";
import Servico from "../../../models/dados/servico";
import PropsId from "../propsId";

export default interface PropsServicoPrestado extends PropsId {
  servico: Servico;
  faixaPrecoInicial: number;
  faixaPrecoFinal: number;
  perfis: PerfilPrestador[];
}
