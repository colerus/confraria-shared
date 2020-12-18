import DadosEstatisticos from "./dadosEstatisticos";
import PropsDadosEstatisticosExibicao from "../../interfaces/models/estatisticas/propsDadosEstatisticosExibicao";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import TipoDadoEstatistico from "../../tipos/tipoDadoEstatistico";

export default class Exibicao extends DadosEstatisticos {
  referencia?: string;
  constructor(dados: PropsDadosEstatisticos | PropsDadosEstatisticosExibicao) {
    super(dados, TipoDadoEstatistico.EXIBICAO);
    if ("referencia" in dados) {
      this.referencia = dados.referencia;
    }
  }

  public ObterReferencia(): string | undefined {
    return this.referencia;
  }
  isValido() {
    return (
      super.isValido() && (this.referencia ? this.referencia.length > 0 : false)
    );
  }
}
