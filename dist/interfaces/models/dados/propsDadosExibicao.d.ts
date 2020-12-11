import { PerfilCliente, PerfilPrestador } from "../../../models/dados";
import Foto from "../../../models/midia/foto";
export default interface PropsDadosExibicao {
    id?: string;
    nomeCurto: string;
    nomeComercial?: string;
    fotoPerfil?: Foto;
    perfil: PerfilCliente | PerfilPrestador;
}
//# sourceMappingURL=propsDadosExibicao.d.ts.map