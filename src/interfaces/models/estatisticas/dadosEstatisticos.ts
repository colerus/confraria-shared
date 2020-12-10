import TipoOrigem from "../../../tipos/tipoOrigem";
import TipoDadoEstatistico from "../../../tipos/tipoDadoEstatistico";
import Id from "../../../base/models/id";

export default interface DadosEstatisticos {
    obterId(): Id | undefined;
    obterPeso(): number | undefined;
    obterData(): Date | undefined;
    obterOrigem(): string | undefined;
    obterTipoOrigem(): TipoOrigem | undefined;
    obterTipoDadoEstatistico(): TipoDadoEstatistico;
}