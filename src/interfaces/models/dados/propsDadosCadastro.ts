import { PerfilCliente, PerfilPrestador } from "../../../models/dados";

export default interface PropsDadosCadastro {
  id?: string;
  dataCadastro?: Date;
  dataConfirmacao?: Date;
  dataEnvioLinkConfirmacao?: Date;
  dataGeracaoCodigoConfirmacao?: Date;
  codigoConfirmacao?: string;
  perfil: PerfilCliente | PerfilPrestador;
}
