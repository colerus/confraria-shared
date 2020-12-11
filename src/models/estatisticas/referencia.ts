import DadosEstatisticos from "./dadosEstatisticos";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import TipoDadoEstatistico from "../../tipos/tipoDadoEstatistico";
import { ChildEntity } from "typeorm";

@ChildEntity(TipoDadoEstatistico.REFERENCIA)
export default class Referencia extends DadosEstatisticos {
  constructor(dadosEstatisticos: PropsDadosEstatisticos) {
    super(dadosEstatisticos, TipoDadoEstatistico.REFERENCIA);
  }
}
