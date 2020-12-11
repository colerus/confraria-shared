import IDadosEstatisticos from "../../interfaces/models/estatisticas/dadosEstatisticos";
import TipoOrigem from "../../tipos/tipoOrigem";
import TipoDadoEstatistico from "../../tipos/tipoDadoEstatistico";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import Id from "../id";
export default class DadosEstatisticos extends Id implements IDadosEstatisticos {
    peso?: number;
    data?: Date;
    origem?: string;
    tipoOrigem?: TipoOrigem;
    tipoDadoEstatistico: TipoDadoEstatistico;
    constructor(dados: PropsDadosEstatisticos, tipoDadoEstatistico: TipoDadoEstatistico);
    obterId(): Id;
    obterPeso(): number | undefined;
    obterData(): Date | undefined;
    obterOrigem(): string | undefined;
    obterTipoOrigem(): TipoOrigem | undefined;
    obterTipoDadoEstatistico(): TipoDadoEstatistico;
}
//# sourceMappingURL=dadosEstatisticos.d.ts.map