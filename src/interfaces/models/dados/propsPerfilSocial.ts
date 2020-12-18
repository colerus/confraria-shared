import { PerfilCliente, PerfilPrestador } from "../../../models/dados";
import PropsId from "../propsId";

export default interface PropsPerfilSocial extends PropsId {
  ativo: boolean;
  perfil: PerfilCliente | PerfilPrestador;
}
