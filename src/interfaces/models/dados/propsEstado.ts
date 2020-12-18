import PropsId from "../propsId";
import Cidade from "../../../models/dados/cidade";
import Pais from "../../../models/dados/pais";
export default interface PropsEstado extends PropsId {
  nome: string;
  sigla: string;
  pais: Pais;
  cidades: Cidade[];
}
