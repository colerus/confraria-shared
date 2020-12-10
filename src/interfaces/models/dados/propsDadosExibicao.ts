import Foto from "../../../base/models/midia/foto";

export default interface PropsDadosExibicao {
    id?: string;
    nomeCurto: string;
    nomeComercial?: string;
    fotoPerfil?: Foto;

}