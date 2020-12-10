import DadosEstatisticos from "./dadosEstatisticos";
import PropsDadosEstatisticos from "../../interfaces/models/estatisticas/propsDadosEstatisticos";
import PropsDadosEstatisticosClique from "../../interfaces/models/estatisticas/propsDadosEstatisticosClique";
export default class Clique extends DadosEstatisticos {
    private readonly x?;
    private readonly y?;
    constructor(dados: PropsDadosEstatisticos | PropsDadosEstatisticosClique);
    obterX(): number | undefined;
    obterY(): number | undefined;
}
//# sourceMappingURL=clique.d.ts.map