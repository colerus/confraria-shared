import TipoTelefone from "../../../tipos/tipoTelefone";
import TipoFuncaoTelefone from "../../../tipos/tipoFuncaoTelefone";
import PropsId from "../propsId";

export default interface PropsTelefone extends PropsId {
  codigoPais: number;
  codigoArea?: number;
  numero: string;
  ramal?: string;
  tipoTelefone: TipoTelefone;
  tipoFuncao: TipoFuncaoTelefone;
  whatsapp?: boolean;
}
