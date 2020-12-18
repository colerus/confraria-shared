import { v4 as uuidv4 } from "uuid";
import PropsDadosCadastro from "../../interfaces/models/dados/propsDadosCadastro";
import Id from "../id";
import Perfil from "./perfil";

export default class DadosCadastro extends Id {
  dataCadastro: Date;
  dataConfirmacao?: Date;
  dataEnvioLinkConfirmacao?: Date;
  dataGeracaoCodigoConfirmacao?: Date;
  codigoConfirmacao?: string;
  perfil: Perfil;

  constructor(dados: PropsDadosCadastro) {
    super(dados);
    this.dataCadastro = dados.dataCadastro || new Date();
    this.dataConfirmacao = dados.dataConfirmacao;
    this.dataEnvioLinkConfirmacao = dados.dataEnvioLinkConfirmacao;
    this.codigoConfirmacao = dados.codigoConfirmacao;
    this.dataGeracaoCodigoConfirmacao = dados.dataGeracaoCodigoConfirmacao;
    this.perfil = dados.perfil;
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

  isValido(): boolean {
    return (
      this.dataCadastro.getTime() <= Date.now() && this.perfil !== undefined
    );
  }
}
