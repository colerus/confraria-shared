import { PerfilCliente, PerfilPrestador } from "../../../models/dados";
import PropsId from "../propsId";

export default interface PropsDadosLogin extends PropsId {
  usuario: string;
  senha: string;
  perfil: PerfilCliente | PerfilPrestador;
}
