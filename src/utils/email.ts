import Email from "../models/dados/email";
import TipoEmail from "../../tipos/tipoEmail";
import PropsEmail from "../../interfaces/models/dados/propsEmail";

export const converterParaEmail = (email: string | Email | PropsEmail, tipoEmail?: TipoEmail) => {
    if (email instanceof Email) {
        return email;
    }
    let mail: Email;
    if(typeof email === "string") {
        mail = new Email({email: email, tipoEmail: tipoEmail || TipoEmail.INDEFINIDO});
    } else {
        mail = new Email(email);
    }
    return mail;
}