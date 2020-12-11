import { PerfilPrestador } from "../../../models/dados";
import Servico from "../../../models/dados/servico";

export default interface PropsServicoPrestado {
  id?: string;
  servico: Servico;
  faixaPrecoInicial: number;
  faixaPrecoFinal: number;
  perfis: PerfilPrestador[];
}
