import TipoTermoBusca from "../../tipos/tipoTermoBusca";
import TipoOperacaoTermoBusca from "../../tipos/tipoOperacaoTermoBusca";
import PropsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import propsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import Id from "../id";
import Busca from "./busca";

export default class TermoBusca extends Id {
  private busca: Busca;
  private tipoTermo: TipoTermoBusca;
  private tipoOperacao: TipoOperacaoTermoBusca;
  private valor: string;

  constructor(termo: PropsTermoBusca) {
    super();
    this.id = termo.id;
    this.busca = termo.busca;
    this.tipoTermo = termo.tipoTermo;
    this.tipoOperacao = termo.tipoOperacao;
    this.valor = termo.valor;
  }

  definirId(id?: string) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  definirBusca(busca: Busca) {
    if (this.busca === undefined) {
      this.busca = busca;
    }
  }

  alterarTipoTermo(tipo: TipoTermoBusca) {
    this.tipoTermo = tipo;
  }

  alterarTipoOperacao(tipo: TipoOperacaoTermoBusca) {
    this.tipoOperacao = tipo;
  }

  alterarValor(valor: string) {
    this.valor = valor;
  }

  obterId() {
    return this.id;
  }

  obterBusca() {
    return this.busca;
  }

  obterTipoTermo() {
    return this.tipoTermo;
  }

  obterTipoOperacao() {
    return this.tipoOperacao;
  }

  obterValor() {
    return this.valor;
  }

  static validar(termo: TermoBusca | propsTermoBusca): boolean {
    let valido: boolean;
    if (termo instanceof TermoBusca) {
      valido = termo.obterValor().trim().length >= 3;
    } else {
      const temp = new TermoBusca(termo);
      valido = temp.isValido();
    }
    return valido;
  }

  isValido() {
    return TermoBusca.validar(this);
  }
}
