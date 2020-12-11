import IDadosEstatisticos from "../../interfaces/models/estatisticas/dadosEstatisticos";
import TipoOrigem from "../../tipos/tipoOrigem";
import TipoDadoEstatistico from "../../tipos/tipoDadoEstatistico";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import Id from "../id";
import { Column, Entity, TableInheritance } from "typeorm";

@Entity("dados_estatisticos")
@TableInheritance({
  column: { name: "tipoDadosEstatisticos", type: "varchar" },
})
export default class DadosEstatisticos
  extends Id
  implements IDadosEstatisticos {
  @Column()
  peso?: number;
  @Column()
  data?: Date;
  @Column()
  origem?: string;
  @Column()
  tipoOrigem?: TipoOrigem;
  @Column()
  tipoDadoEstatistico: TipoDadoEstatistico;

  constructor(
    dados: PropsDadosEstatisticos,
    tipoDadoEstatistico: TipoDadoEstatistico
  ) {
    super();
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
}
