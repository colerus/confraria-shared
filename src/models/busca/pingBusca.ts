import Id from "../id";
import PropsPingBusca from "../../interfaces/models/busca/propsPingBusca";

export default class PingBusca extends Id {
  private idBusca: Id;
  private timestamp: number;

  constructor(props: PropsPingBusca) {
    super();
    this.id = props.id;
    this.idBusca = props.idbusca;
    this.timestamp = props.timestamp;
  }
  definirId(id?: string) {
    if (this.id === undefined) {
      this.id = id;
      return true;
    }
    return false;
  }
  definirIdBusca(id: Id) {
    if (this.idBusca === undefined) {
      this.idBusca = id;
    }
  }
  obterIdBusca() {
    return this.idBusca;
  }
  obterTimestamp() {
    return this.timestamp;
  }
}
