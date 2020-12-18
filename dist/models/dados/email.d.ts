import PropsEmail from "../../interfaces/models/dados/propsEmail";
import Id from "../id";
import TipoEmail from "../../tipos/tipoEmail";
export default class Email extends Id {
    email: string;
    tipoEmail: TipoEmail;
    constructor(dados: PropsEmail);
    alterarId(id?: string): void;
    alterarEmail(email: string): void;
    alterarTipoEmail(tipoEmail: TipoEmail): void;
    obterId(): any;
    obterEmail(): string;
    obterTipoEmail(): TipoEmail;
    isValido(): boolean;
}
//# sourceMappingURL=email.d.ts.map