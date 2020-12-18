import { PerfilCliente, PerfilPrestador } from "../../../models/dados";
import PropsId from "../propsId";
export default interface PropsDadosCadastro extends PropsId {
    dataCadastro?: Date;
    dataConfirmacao?: Date;
    dataEnvioLinkConfirmacao?: Date;
    dataGeracaoCodigoConfirmacao?: Date;
    codigoConfirmacao?: string;
    perfil: PerfilCliente | PerfilPrestador;
}
//# sourceMappingURL=propsDadosCadastro.d.ts.map