import Perfil from "./perfil";
import PropsPerfilCliente from "../../interfaces/models/dados/propsPerfilCliente";
export default class PerfilCliente extends Perfil {
    constructor(perfil: PropsPerfilCliente);
    static validar(perfil: PerfilCliente | PropsPerfilCliente): boolean;
    isValido(): boolean;
}
//# sourceMappingURL=perfilCliente.d.ts.map