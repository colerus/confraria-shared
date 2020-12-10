import PerfilCliente from "../dados/perfilCliente";
import TermoBusca from "./termoBusca";
import PropsBusca from "../../interfaces/models/busca/propsBusca";
import propsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import TermoBuscaError from "../../exceptions/termoBuscaError";
import PropsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import Id from "../id";

export default class Busca extends Id {
  private cliente: PerfilCliente;
  private termos: TermoBusca[];
  private dataInicio: Date;

  constructor(busca: PropsBusca) {
    super();
    this.id = busca.id;
    this.cliente = busca.cliente;
    this.termos = busca.termos;
    this.dataInicio = busca.dataInicio || new Date();
  }

  definirId(id?: string) {
    if (this.id === undefined) {
      this.id = id;
    }
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
        tb.obterValor().toLowerCase().trim() ===
          t.obterValor().toLowerCase().trim() &&
        tb.obterTipoTermo() === t.obterTipoTermo()
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
        tb.obterValor().toLowerCase().trim() ===
          t.obterValor().toLowerCase().trim() &&
        tb.obterTipoTermo() === t.obterTipoTermo()
    );
    if (item.length === 1) {
      const index = this.termos.indexOf(item[0]);
      this.termos.splice(index, 1);
    }
  }

  obterId() {
    return this.id;
  }

  obterCliente() {
    return this.cliente;
  }

  obterTermos() {
    return this.termos;
  }

  obterData() {
    return this.dataInicio;
  }
}
