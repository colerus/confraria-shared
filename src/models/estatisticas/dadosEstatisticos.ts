import IDadosEstatisticos from "../../interfaces/models/estatisticas/dadosEstatisticos";
import TipoOrigem from "../../tipos/tipoOrigem";
import TipoDadoEstatistico from "../../tipos/tipoDadoEstatistico";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import Id from "../id";

export default class DadosEstatisticos
  extends Id
  implements IDadosEstatisticos {
  peso?: number;
  data?: Date;
  origem?: string;
  tipoOrigem?: TipoOrigem;
  tipoDadoEstatistico: TipoDadoEstatistico;

  constructor(
    dados: PropsDadosEstatisticos,
    tipoDadoEstatistico: TipoDadoEstatistico
  ) {
    super(dados);
    this.peso = dados.peso;
    this.data = dados.data;
    this.origem = dados.origem;
    this.tipoOrigem = dados.tipoOrigem;
    this.tipoDadoEstatistico = tipoDadoEstatistico;
  }

  obterId(): Id {
    return this.id;
  }
  obterPeso(): number | undefined {
    return this.peso;
  }
  obterData(): Date | undefined {
    return this.data;
  }
  obterOrigem(): string | undefined {
    return this.origem;
  }
  obterTipoOrigem(): TipoOrigem | undefined {
    return this.tipoOrigem;
  }
  obterTipoDadoEstatistico(): TipoDadoEstatistico {
    return this.tipoDadoEstatistico;
  }
  isValido() {
    return (
      this.peso !== undefined &&
      this.peso >= 0 &&
      this.data !== undefined &&
      this.data.getTime() < Date.now() &&
      this.origem !== undefined &&
      this.origem.trim().length > 0 &&
      this.tipoOrigem !== undefined &&
      this.tipoDadoEstatistico !== undefined &&
      this.tipoDadoEstatistico !== TipoDadoEstatistico.INDEFINIDO
    );
  }
}
