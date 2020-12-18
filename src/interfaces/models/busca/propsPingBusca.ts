import PropsId from "../propsId";
import Busca from "../../../models/busca/busca";

export default interface PropsPingBusca extends PropsId {
  busca: Busca;
  timestamp: number;
}
