import DadosEstatisticos from "./dadosEstatisticos";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import TipoDadoEstatistico from "../../tipos/tipoDadoEstatistico";
import { ChildEntity } from "typeorm";

@ChildEntity(TipoDadoEstatistico.AVALIACAO)
export default class Avaliacao extends DadosEstatisticos {
  constructor(dados: PropsDadosEstatisticos) {
    super(dados, TipoDadoEstatistico.AVALIACAO);
  }
}
