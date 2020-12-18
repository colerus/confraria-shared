import DadosEstatisticos from "./dadosEstatisticos";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import TipoDadoEstatistico from "../../tipos/tipoDadoEstatistico";

export default class Avaliacao extends DadosEstatisticos {
  constructor(dados: PropsDadosEstatisticos) {
    super(dados, TipoDadoEstatistico.AVALIACAO);
  }
}
