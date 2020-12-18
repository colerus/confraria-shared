import PropsEmail from "../../interfaces/models/dados/propsEmail";
import EmailValidator from "email-validator";
import EmailError from "../../exceptions/emailError";
import Id from "../id";
import TipoEmail from "../../tipos/tipoEmail";

export default class Email extends Id {
  email: string;
  tipoEmail: TipoEmail;

  constructor(dados: PropsEmail) {
    super(dados);
    this.email = dados.email;
    this.tipoEmail = dados.tipoEmail || TipoEmail.INDEFINIDO;
  }

  alterarId(id?: string) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  alterarEmail(email: string) {
    if (!EmailValidator.validate(this.obterEmail())) {
      throw new EmailError("Endereço de e-mail inválido");
    }
    this.email = email;
  }

  alterarTipoEmail(tipoEmail: TipoEmail) {
    this.tipoEmail = tipoEmail;
  }

  obterId() {
    return this.id;
  }

  obterEmail() {
    return this.email;
  }

  obterTipoEmail() {
    return this.tipoEmail;
  }

  isValido(): boolean {
    return EmailValidator.validate(this.obterEmail());
  }
}
