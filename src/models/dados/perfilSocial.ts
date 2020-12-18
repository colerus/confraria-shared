import { Perfil } from ".";
import PropsPerfilSocial from "../../interfaces/models/dados/propsPerfilSocial";
import Id from "../id";

export default class PerfilSocial extends Id {
  //TODO: Implementar

  perfil: Perfil;

  constructor(props: PropsPerfilSocial) {
    super(props);
    this.perfil = props.perfil;
  }

  isValido(): boolean {
    return true;
  }
}
