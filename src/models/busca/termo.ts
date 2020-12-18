import { Id } from "..";
import { TipoTermoBusca } from "../../tipos";
import PropsTermo from "../../interfaces/models/busca/propsTermo";
import TermoBusca from "./termoBusca";

export default class Termo extends Id {
  public tipoTermo: TipoTermoBusca;
  public valor: string;
  public termoBuscas: TermoBusca[];

  constructor(termo: PropsTermo) {
    super(termo);
    this.tipoTermo = termo.tipoTermo;
    this.valor = termo.valor;
    this.termoBuscas = termo.termoBuscas;
  }

  isValido() {
    return this.tipoTermo !== undefined && this.valor.trim().length > 2;
  }
}
