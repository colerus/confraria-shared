import Perfil from "./perfil";
import PropsPerfilCliente from "../../interfaces/models/dados/propsPerfilCliente";
import TipoPerfil from "../../tipos/tipoPerfil";

export default class PerfilCliente extends Perfil {
  constructor(perfil: PropsPerfilCliente) {
    super({ ...perfil, tipoPerfil: TipoPerfil.CLIENTE });
  }

  isValido(): boolean {
    return super.isValido();
  }
}
