import Perfil from "./perfil";
import PropsPerfilCliente from "../../interfaces/models/dados/propsPerfilCliente";
import TipoPerfil from "../../tipos/tipoPerfil";

export default class PerfilCliente extends Perfil {
  constructor(perfil: PropsPerfilCliente) {
    super({ ...perfil, tipoPerfil: TipoPerfil.CLIENTE });
  }

  static validar(perfil: PerfilCliente | PropsPerfilCliente): boolean {
    let valido = Perfil.validar(perfil);
    if (!(perfil instanceof PerfilCliente)) {
      const temp = new PerfilCliente(perfil);
      valido = valido && temp.isValido();
    }
    return valido;
  }

  isValido(): boolean {
    return PerfilCliente.validar(this);
  }
}
