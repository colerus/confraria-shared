import Id from "../../../models/id";
import TipoDadoEstatistico from "../../../tipos/tipoDadoEstatistico";
import TipoOrigem from "../../../tipos/tipoOrigem";
import PropsId from "../propsId";

export default interface DadosEstatisticos extends PropsId {
  obterId(): Id | undefined;
  obterPeso(): number | undefined;
  obterData(): Date | undefined;
  obterOrigem(): string | undefined;
  obterTipoOrigem(): TipoOrigem | undefined;
  obterTipoDadoEstatistico(): TipoDadoEstatistico;
}
