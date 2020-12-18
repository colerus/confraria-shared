import PropsEndereco from "../../interfaces/models/dados/propsEndereco";
import Id from "../id";
import Logradouro from "./logradouro";

export default class Endereco extends Id {
  logradouro: Logradouro;
  numero?: number;
  complemento?: string;
  codigoPostal?: string;
  referencia?: string;

  constructor(dados: PropsEndereco) {
    super(dados);
    this.logradouro = dados.logradouro;
    this.numero = dados.numero;
    this.complemento = dados.complemento;
    this.codigoPostal = dados.codigoPostal;
    this.referencia = dados.referencia;
  }

  alterarId(id?: string) {
    if (this.id === undefined) {
      this.id = id;
    }
  }
  isValido(): boolean {
    return (
      this.logradouro !== undefined &&
      this.isCodigoPostalValido() &&
      (this.isNumeroValido() ||
        this.isComplementoValido() ||
        this.isReferenciaValido())
    );
  }

  private isNumeroValido() {
    return this.numero !== undefined && this.numero > 0;
  }

  private isComplementoValido() {
    return this.complemento !== undefined && this.complemento.trim().length > 0;
  }
  private isCodigoPostalValido() {
    return (
      this.codigoPostal !== undefined && this.codigoPostal.trim().length > 5
    );
  }

  private isReferenciaValido() {
    return this.referencia !== undefined && this.referencia.trim().length > 3;
  }
}
