import { OneToOne, Entity } from "typeorm";
import { Perfil } from ".";
import PropsPerfilSocial from "../../interfaces/models/dados/propsPerfilSocial";
import Id from "../id";

@Entity("perfil_social")
export default class PerfilSocial extends Id {
  //TODO: Implementar

  @OneToOne(() => Perfil, (perfil) => perfil.dadosPessoais)
  perfil: Perfil;

  constructor(props: PropsPerfilSocial) {
    super();
    this.perfil = props.perfil;
  }

  isValido(): boolean {
    return true;
  }
}
