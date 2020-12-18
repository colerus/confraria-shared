import DadosEstatisticos from "./dadosEstatisticos";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import TipoDadoEstatistico from "../../tipos/tipoDadoEstatistico";

export default class Referencia extends DadosEstatisticos {
  constructor(dadosEstatisticos: PropsDadosEstatisticos) {
    super(dadosEstatisticos, TipoDadoEstatistico.REFERENCIA);
  }
  isValido() {
    return super.isValido();
  }
}
