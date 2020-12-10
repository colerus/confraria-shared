import Midia from "./midia";
import PropsMidia from "../../interfaces/models/midia/propsMidia";
import TipoMidia from "../../tipos/tipoMidia";
import PropsVideo from "../../interfaces/models/midia/propsVideo";

export default class Video extends Midia {
  private duracao?: number;
  constructor(dados: PropsVideo | PropsMidia) {
    super(dados, TipoMidia.VIDEO);
    if ("duracao" in dados) {
      this.duracao = dados.duracao;
    }
  }
  alterarDuracao(duracao?: number) {
    this.duracao = duracao;
  }
  obterDuracao() {
    return this.duracao;
  }
}
