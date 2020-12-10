import DadosEstatisticos from "./dadosEstatisticos";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import TipoDadoEstatistico from "../../tipos/tipoDadoEstatistico";
import PropsDadosEstatisticosClique from "../../interfaces/models/estatisticas/propsDadosEstatisticosClique";

export default class Clique extends DadosEstatisticos {
  private readonly x?: number;
  private readonly y?: number;

  constructor(dados: PropsDadosEstatisticos | PropsDadosEstatisticosClique) {
    super(dados, TipoDadoEstatistico.CLIQUE);
    if ("x" in dados) {
      this.x = dados.x;
    }
    if ("y" in dados) {
      this.y = dados.y;
    }
  }

  obterX(): number | undefined {
    return this.x;
  }

  obterY(): number | undefined {
    return this.y;
  }
}