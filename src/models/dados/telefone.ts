import TipoFuncaoTelefone from "../../tipos/tipoFuncaoTelefone";
import TipoTelefone from "../../tipos/tipoTelefone";
import PropsTelefone from "../../interfaces/models/dados/propsTelefone";
import PhoneNumber from "awesome-phonenumber";
import {
  converterParaPhoneNumber,
  converterParaTelefone,
} from "../../utils/telefone";
import TelefoneError from "../../exceptions/telefoneError";
import Id from "../id";
import { Column, Entity } from "typeorm";

@Entity("telefone")
export default class Telefone extends Id {
  @Column()
  codigoPais: number;
  @Column()
  codigoArea?: number;
  @Column()
  numero: string;
  @Column()
  ramal?: string;
  @Column()
  tipoTelefone: TipoTelefone;
  @Column()
  tipoFuncao: TipoFuncaoTelefone;
  @Column()
  whatsapp: boolean;

  constructor(dados: PropsTelefone) {
    super();
    this.id = dados.id;
    this.codigoPais = dados.codigoPais;
    this.codigoArea = dados.codigoArea;
    this.numero = dados.numero;
    this.ramal = dados.ramal;
    this.tipoTelefone = dados.tipoTelefone;
    this.tipoFuncao = dados.tipoFuncao || TipoFuncaoTelefone.INDEFINIDO;
    this.whatsapp = dados.whatsapp || false;
  }

  alterarId(id?: string) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  alterarTelefone(telefone: string | PhoneNumber) {
    const phone = converterParaTelefone(telefone);
    if (!Telefone.validar(phone)) {
      throw new TelefoneError("Telefone inválido");
    }
    this.codigoPais = phone.codigoPais;
    this.numero = phone.numero;
    this.codigoArea = phone.codigoArea;
    this.tipoTelefone = phone.tipoTelefone;
  }

  alterarTipoFuncao(tipoFuncao?: TipoFuncaoTelefone) {
    this.tipoFuncao = tipoFuncao || TipoFuncaoTelefone.INDEFINIDO;
  }

  alterarIsWhatsapp(whatsapp: boolean) {
    this.whatsapp = whatsapp;
  }

  alterarRamal(ramal: string | undefined) {
    this.ramal = ramal;
  }

  obterId() {
    return this.id;
  }

  obterCodigoPais() {
    return this.codigoPais;
  }

  obterCodigoArea() {
    return this.codigoArea;
  }

  obterNumero() {
    return this.numero;
  }

  obterTipoTelefone() {
    return this.tipoTelefone;
  }

  obterTipoFuncao() {
    return this.tipoFuncao;
  }

  obterRamal() {
    return this.ramal;
  }

  isWhatsapp() {
    return this.whatsapp;
  }

  toString(): string {
    return `+${this.codigoPais}${this.codigoArea}${this.numero}`;
  }

  toStringFormatado(): string {
    return converterParaPhoneNumber(this).getNumber("national");
  }

  static validar(telefone: Telefone | string | PhoneNumber): boolean {
    return converterParaPhoneNumber(telefone).isValid();
  }

  isValido(): boolean {
    return Telefone.validar(this);
  }
}
