import { PerfilCliente, PerfilPrestador } from "../../../models/dados";

export default interface PropsPerfilSocial {
  id?: string;
  ativo: boolean;
  perfil: PerfilCliente | PerfilPrestador;
}
