import DadosEstatisticos from "./dadosEstatisticos";
import PropsDadosEstatisticosExibicao from "../../interfaces/models/estatisticas/propsDadosEstatisticosExibicao";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
export default class Exibicao extends DadosEstatisticos {
    referencia?: string;
    constructor(dados: PropsDadosEstatisticos | PropsDadosEstatisticosExibicao);
    ObterReferencia(): string | undefined;
    isValido(): boolean;
}
//# sourceMappingURL=exibicao.d.ts.map