import PropsId from "../propsId";
import Logradouro from "../../../models/dados/logradouro";
import Cidade from "../../../models/dados/cidade";
export default interface PropsBairro extends PropsId {
  nome: string;
  logradouros: Logradouro[];
  codigoPostal: string;
  cidade: Cidade;
}
