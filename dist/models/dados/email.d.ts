import PropsEmail from "../../interfaces/models/dados/propsEmail";
import Id from "../id";
import TipoEmail from "../../tipos/tipoEmail";
export default class Email extends Id {
    private email;
    private tipoEmail;
    constructor(dados: PropsEmail);
    alterarId(id?: string): void;
    alterarEmail(email: string): void;
    alterarTipoEmail(tipoEmail: TipoEmail): void;
    obterId(): any;
    obterEmail(): string;
    obterTipoEmail(): TipoEmail;
    static validar(email: string | Email): boolean;
    isValido(): boolean;
}
//# sourceMappingURL=email.d.ts.map