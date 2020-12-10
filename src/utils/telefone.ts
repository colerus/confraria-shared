import Telefone from "../models/dados/telefone";
import PhoneNumber from "awesome-phonenumber";
import PropsTelefone from "../interfaces/models/dados/propsTelefone";
import TipoTelefone from "../tipos/tipoTelefone";
import TipoFuncaoTelefone from "../tipos/tipoFuncaoTelefone";

export const validarTelefone = (
  telefone: Telefone | string | PhoneNumber
): boolean => {
  if (!(telefone instanceof PhoneNumber)) {
    return converterParaPhoneNumber(telefone).isValid();
  }
  return telefone.isValid();
};

export const converterParaPhoneNumber = (
  telefone: Telefone | string | PhoneNumber | PropsTelefone
): PhoneNumber => {
  if (telefone instanceof PhoneNumber) {
    return telefone;
  }
  if (telefone instanceof Telefone || typeof telefone === "string") {
    const phone = new PhoneNumber(telefone.toString());
    return phone;
  }
  const tel = new Telefone(telefone);
  return converterParaPhoneNumber(tel);
};

export const converterParaTelefone = (
  telefone: string | PhoneNumber | Telefone | PropsTelefone
): Telefone => {
  if (telefone instanceof Telefone) {
    return telefone;
  }
  const phone = converterParaPhoneNumber(telefone);
  const dadosTelefone: PropsTelefone = {
    codigoPais: phone.getCountryCode(),
    numero: phone.getNumber(),
    tipoTelefone: phone.isMobile() ? TipoTelefone.CELULAR : TipoTelefone.FIXO,
    tipoFuncao: TipoFuncaoTelefone.INDEFINIDO,
  };
  return new Telefone(dadosTelefone);
};
