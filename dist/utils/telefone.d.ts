import Telefone from "../models/dados/telefone";
import PhoneNumber from "awesome-phonenumber";
import PropsTelefone from "../interfaces/models/dados/propsTelefone";
export declare const validarTelefone: (telefone: Telefone | string | PhoneNumber) => boolean;
export declare const converterParaPhoneNumber: (telefone: Telefone | string | PhoneNumber | PropsTelefone) => PhoneNumber;
export declare const converterParaTelefone: (telefone: string | PhoneNumber | Telefone | PropsTelefone) => Telefone;
//# sourceMappingURL=telefone.d.ts.map