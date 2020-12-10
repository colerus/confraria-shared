import TipoTelefone from "../../../tipos/tipoTelefone";
import TipoFuncaoTelefone from "../../../tipos/tipoFuncaoTelefone";
export default interface PropsTelefone {
    id?: string;
    codigoPais: number;
    codigoArea?: number;
    numero: string;
    ramal?: string;
    tipoTelefone: TipoTelefone;
    tipoFuncao: TipoFuncaoTelefone;
    whatsapp?: boolean;
}
//# sourceMappingURL=propsTelefone.d.ts.map