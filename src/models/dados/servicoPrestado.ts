import Servico from "./servico";
import PropsServicoPrestado from "../../interfaces/models/dados/propsServicoPrestado";
import Id from "../id";
import { PerfilPrestador } from ".";

export default class ServicoPrestado extends Id {
  servico: Servico;
  faixaPrecoInicial: number;
  faixaPrecoFinal: number;
  perfis: PerfilPrestador[];

  constructor(servico: PropsServicoPrestado) {
    super(servico);
    this.servico = servico.servico;
    this.faixaPrecoInicial = servico.faixaPrecoInicial;
    this.faixaPrecoFinal = servico.faixaPrecoFinal;
    this.perfis = servico.perfis;
  }

  definirId(id: string | undefined) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  alterarFaixaPrecoInicial(valor: number) {
    this.faixaPrecoInicial = valor;
  }

  alterarFaixaPrecoFinal(valor: number) {
    this.faixaPrecoFinal = valor;
  }

  obterId() {
    return this.id;
  }

  obterServico() {
    return this.servico;
  }

  obterFaixaPrecoInicial() {
    return this.faixaPrecoInicial;
  }

  obterFaixaPrecoFinal() {
    return this.faixaPrecoFinal;
  }

  isValido(): boolean {
    return this.isServicoValido() && this.isPrecosValidos();
  }
  isServicoValido(): boolean {
    return this.servico.isValido();
  }
  isPrecoInicialValido(): boolean {
    return this.faixaPrecoInicial >= 0;
  }
  isPrecoFinalValido(): boolean {
    return (
      this.isPrecoInicialValido() &&
      this.faixaPrecoInicial >= this.faixaPrecoInicial
    );
  }
  isPrecosValidos(): boolean {
    return this.isPrecoFinalValido();
  }
}
