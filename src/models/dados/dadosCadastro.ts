import { v4 as uuidv4 } from "uuid";
import PropsDadosCadastro from "../../interfaces/models/dados/propsDadosCadastro";
import Id from "../id";

export default class DadosCadastro extends Id {
  private dataCadastro: Date;
  private dataConfirmacao?: Date;
  private dataEnvioLinkConfirmacao?: Date;
  private dataGeracaoCodigoConfirmacao?: Date;
  private codigoConfirmacao?: string;

  constructor(dados: PropsDadosCadastro) {
    super();
    this.id = dados.id;
    this.dataCadastro = dados.dataCadastro || new Date();
    this.dataConfirmacao = dados.dataConfirmacao;
    this.dataEnvioLinkConfirmacao = dados.dataEnvioLinkConfirmacao;
    this.codigoConfirmacao = dados.codigoConfirmacao;
    this.dataGeracaoCodigoConfirmacao = dados.dataGeracaoCodigoConfirmacao;
  }

  definirId(id: string | undefined) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  definirDataConfirmacao(data: Date | undefined) {
    if (this.dataConfirmacao === undefined) {
      this.dataConfirmacao = data;
    }
  }

  definirDataEnvioLinkConfirmacao(data: Date | undefined) {
    this.dataEnvioLinkConfirmacao = data;
  }

  obterId() {
    return this.id;
  }

  obterDataCadastro() {
    return this.dataCadastro;
  }

  obterDataConfirmacao() {
    return this.dataConfirmacao;
  }

  obterDataEnvioLinkConfirmacao() {
    return this.dataEnvioLinkConfirmacao;
  }

  obterCodigoConfirmacao() {
    return this.codigoConfirmacao;
  }

  obterDataGeracaoCodigoConfirmacao() {
    return this.dataGeracaoCodigoConfirmacao;
  }

  gerarNovoCodigoConfirmacao() {
    if (this.dataConfirmacao !== undefined) {
      return;
    }
    this.dataEnvioLinkConfirmacao = undefined;
    this.codigoConfirmacao = uuidv4();
    this.dataGeracaoCodigoConfirmacao = new Date();
  }

  static validar(dados: DadosCadastro | PropsDadosCadastro): boolean {
    let valido: boolean;
    if (dados instanceof DadosCadastro) {
      valido = dados.obterDataCadastro().getTime() - Date.now() < 0;
    } else {
      const temp = new DadosCadastro(dados);
      valido = temp.isValido();
    }
    return valido;
  }

  isValido(): boolean {
    return DadosCadastro.validar(this);
  }
}
