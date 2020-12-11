import { Column, Entity, ManyToOne } from "typeorm";
import TipoOperacaoTermoBusca from "../../tipos/tipoOperacaoTermoBusca";
import PropsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import propsTermoBusca from "../../interfaces/models/busca/propsTermoBusca";
import Id from "../id";
import Busca from "./busca";
import Termo from "./termo";

@Entity("termo_busca")
export default class TermoBusca extends Id {
  @ManyToOne(() => Busca, (busca) => busca.termos)
  busca: Busca;
  @Column()
  tipoOperacao: TipoOperacaoTermoBusca;
  @ManyToOne(() => Termo, (termo) => termo.termoBuscas)
  termo: Termo;

  constructor(termo: PropsTermoBusca) {
    super();
    this.id = termo.id;
    this.busca = termo.busca;
    this.tipoOperacao = termo.tipoOperacao;
    this.termo = termo.termo;
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

  alterarTipoOperacao(tipo: TipoOperacaoTermoBusca) {
    this.tipoOperacao = tipo;
  }

  obterId() {
    return this.id;
  }

  obterBusca() {
    return this.busca;
  }

  obterTipoOperacao() {
    return this.tipoOperacao;
  }

  static validar(termo: TermoBusca | propsTermoBusca): boolean {
    let valido: boolean;
    if (termo instanceof TermoBusca) {
      valido = termo.termo.valor.trim().length >= 3;
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
