import Foto from "../../../models/midia/foto";

export default interface PropsDadosExibicao {
  id?: string;
  nomeCurto: string;
  nomeComercial?: string;
  fotoPerfil?: Foto;
}
