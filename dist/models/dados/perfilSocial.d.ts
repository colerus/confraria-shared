import { Perfil } from ".";
import PropsPerfilSocial from "../../interfaces/models/dados/propsPerfilSocial";
import Id from "../id";
export default class PerfilSocial extends Id {
    perfil: Perfil;
    constructor(props: PropsPerfilSocial);
    isValido(): boolean;
}
//# sourceMappingURL=perfilSocial.d.ts.map