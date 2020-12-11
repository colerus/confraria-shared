import DadosEstatisticos from "./dadosEstatisticos";
import PropsDadosEstatisticosExibicao from "../../interfaces/models/estatisticas/propsDadosEstatisticosExibicao";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import TipoDadoEstatistico from "../../tipos/tipoDadoEstatistico";
import { Column, ChildEntity } from "typeorm";

@ChildEntity(TipoDadoEstatistico.EXIBICAO)
export default class Exibicao extends DadosEstatisticos {
  @Column()
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
}
