import PropsEmail from "../../interfaces/models/dados/propsEmail";
import EmailValidator from "email-validator";
import EmailError from "../../exceptions/emailError";
import Id from "../id";
import TipoEmail from "../../tipos/tipoEmail";

export default class Email extends Id {
  private email: string;
  private tipoEmail: TipoEmail;

  constructor(dados: PropsEmail) {
    super();
    this.email = dados.email;
    this.tipoEmail = dados.tipoEmail || TipoEmail.INDEFINIDO;
  }

  alterarId(id?: string) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  alterarEmail(email: string) {
    if (!Email.validar(email)) {
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

  static validar(email: string | Email): boolean {
    if (email instanceof Email) {
      return EmailValidator.validate(email.obterEmail());
    }
    return EmailValidator.validate(email);
  }

  isValido(): boolean {
    return Email.validar(this);
  }
}
