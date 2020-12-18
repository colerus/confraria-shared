import PropsId from "../propsId";
import Estado from "../../../models/dados/estado";
export default interface PropsPais extends PropsId {
  nome: string;
  sigla2: string;
  sigla3: string;
  sigla4: string;
  estados: Estado[];
}
