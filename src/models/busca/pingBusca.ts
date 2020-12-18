import Id from "../id";
import PropsPingBusca from "../../interfaces/models/busca/propsPingBusca";
import Busca from "./busca";

export default class PingBusca extends Id {
  busca: Busca;
  timestamp: number;

  constructor(props: PropsPingBusca) {
    super(props);
    this.busca = props.busca;
    this.timestamp = props.timestamp;
  }
  isValido() {
    return this.busca !== undefined && this.timestamp > 0;
  }
}
