import PropsEndereco from "../../interfaces/models/dados/propsEndereco";
import TipoEndereco from "../../tipos/tipoEndereco";
import propsEndereco from "../../interfaces/models/dados/propsEndereco";
import Id from "../id";

export default class Endereco extends Id {
  private tipoLogradouro: string;
  private logradouro: string;
  private numero?: number;
  private complemento?: string;
  private codigoPostal?: string;
  private cidade: string;
  private estado: string;
  private pais: string;
  private referencia?: string;
  private tipoEndereco: TipoEndereco;

  constructor(dados: PropsEndereco, tipoEndereco: TipoEndereco) {
    super();
    this.id = dados.id;
    this.tipoLogradouro = dados.tipoLogradouro;
    this.logradouro = dados.logradouro;
    this.numero = dados.numero;
    this.complemento = dados.complemento;
    this.codigoPostal = dados.codigoPostal;
    this.cidade = dados.cidade;
    this.estado = dados.estado;
    this.pais = dados.pais;
    this.referencia = dados.referencia;
    this.tipoEndereco = tipoEndereco;
  }

  alterarId(id?: string) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  alterarTipoLogradouro(tipoLogradouro: string) {
    this.tipoLogradouro = tipoLogradouro;
  }

  alterarLogradouro(logradouro: string) {
    this.logradouro = logradouro;
  }

  alterarNumero(numero?: number) {
    this.numero = numero;
  }

  alterarComplemento(complemento?: string) {
    this.complemento = complemento;
  }

  alterarCodigoPostal(codigoPostal: string) {
    this.codigoPostal = codigoPostal;
  }

  alterarCidade(cidade: string) {
    this.cidade = cidade;
  }

  alterarEstado(estado: string) {
    this.estado = estado;
  }

  alterarPais(pais: string) {
    this.pais = pais;
  }

  alterarReferencia(referencia?: string) {
    this.referencia = referencia;
  }

  alterarTipoEndereco(tipoEndereco: TipoEndereco) {
    this.tipoEndereco = tipoEndereco;
  }

  obterId() {
    return this.id;
  }

  obterTipoLogradouro() {
    return this.tipoLogradouro;
  }

  obterLogradouro() {
    return this.logradouro;
  }

  obterNumero() {
    return this.numero;
  }

  obterComplemento() {
    return this.complemento;
  }

  obterCodigoPostal() {
    return this.codigoPostal;
  }

  obterCidade() {
    return this.cidade;
  }

  obterEstado() {
    return this.estado;
  }

  obterPais() {
    return this.pais;
  }

  obterReferencia() {
    return this.referencia;
  }

  obterTipoEndereco() {
    return this.tipoEndereco;
  }

  static validar(endereco: Endereco | propsEndereco): boolean {
    return endereco instanceof Endereco
      ? endereco.isValido()
      : new Endereco(endereco, TipoEndereco.INDEFINIDO).isValido();
  }
  isValido(): boolean {
    return (
      this.isLogradouroValido() &&
      this.isCidadeValida() &&
      this.isEstadoValido() &&
      this.isPaisValido()
    );
  }
  isLogradouroValido(): boolean {
    return this.logradouro.length > 0;
  }
  isCidadeValida(): boolean {
    return this.cidade.length > 3;
  }
  isEstadoValido(): boolean {
    return this.estado.length >= 2;
  }
  isPaisValido(): boolean {
    return this.pais.length >= 2;
  }
}
