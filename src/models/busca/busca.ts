import PerfilCliente from "../dados/perfilCliente";
import TermoBusca from "./termoBusca";
import PropsBusca from "../../interfaces/models/busca/propsBusca";
import propsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import TermoBuscaError from "../../exceptions/termoBuscaError";
import PropsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import Id from "../id";
import { PingBusca } from ".";
import { SalaBusca } from "../chat";

export default class Busca extends Id {
  cliente: PerfilCliente;
  termos: TermoBusca[];
  dataInicio: Date;
  pings?: PingBusca[];
  salas?: SalaBusca[];

  constructor(busca: PropsBusca) {
    super(busca);
    this.cliente = busca.cliente;
    this.termos = busca.termos;
    this.dataInicio = busca.dataInicio || new Date();
    this.salas = busca.salas;
  }

  adicionarTermo(termo: TermoBusca | propsTermoBusca) {
    let t: TermoBusca;
    if (termo instanceof TermoBusca) {
      t = termo;
    } else {
      t = new TermoBusca(termo);
    }
    if (!t.isValido()) {
      throw new TermoBuscaError("Termo de busca inválido");
    }
    const jaExiste = this.termos.filter(
      (tb) =>
        tb.termo.valor.toLowerCase().trim() ===
          t.termo.valor.toLowerCase().trim() &&
        tb.termo.tipoTermo === t.termo.tipoTermo
    );
    if (jaExiste.length > 0) {
      throw new TermoBuscaError("Já existe um termo deste tipo com este valor");
    }
    this.termos.push(t);
  }

  removerTermo(termoBusca: TermoBusca | PropsTermoBusca) {
    let t: TermoBusca;
    if (termoBusca instanceof TermoBusca) {
      t = termoBusca;
    } else {
      t = new TermoBusca(termoBusca);
    }
    const item = this.termos.filter(
      (tb) =>
        tb.termo.valor.toLowerCase().trim() ===
          t.termo.valor.toLowerCase().trim() &&
        tb.termo.tipoTermo === t.termo.tipoTermo
    );
    if (item.length === 1) {
      const index = this.termos.indexOf(item[0]);
      this.termos.splice(index, 1);
    }
  }
  isValido(): boolean {
    return (
      this.cliente !== undefined &&
      this.termos.length > 0 &&
      this.dataInicio.getTime() <= Date.now()
    );
  }
}
