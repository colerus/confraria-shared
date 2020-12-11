import { Column, ManyToOne } from "typeorm";
import { Entity } from "typeorm";
import Id from "../id";
import PropsPingBusca from "../../interfaces/models/busca/propsPingBusca";
import Busca from "./busca";

@Entity("ping_busca")
export default class PingBusca extends Id {
  @ManyToOne(() => Busca, (busca) => busca.pings)
  busca: Id;
  @Column()
  timestamp: number;

  constructor(props: PropsPingBusca) {
    super();
    this.id = props.id;
    this.busca = props.busca;
    this.timestamp = props.timestamp;
  }
  definirId(id?: string) {
    if (this.id === undefined) {
      this.id = id;
      return true;
    }
    return false;
  }
}
