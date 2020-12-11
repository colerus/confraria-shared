import { PerfilCliente, PerfilPrestador } from "../../../models/dados";
export default interface PropsDadosLogin {
    id?: string;
    usuario: string;
    senha: string;
    perfil: PerfilCliente | PerfilPrestador;
}
//# sourceMappingURL=propsDadosLogin.d.ts.map