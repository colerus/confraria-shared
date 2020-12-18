import { PerfilCliente, PerfilPrestador } from "../../../models/dados";
import Foto from "../../../models/midia/foto";
import PropsId from "../propsId";

export default interface PropsDadosExibicao extends PropsId {
  nomeCurto: string;
  nomeComercial?: string;
  fotoPerfil?: Foto;
  perfil: PerfilCliente | PerfilPrestador;
}
