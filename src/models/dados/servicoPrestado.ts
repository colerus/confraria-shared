import Servico from "./servico";
import PropsServicoPrestado from "../../interfaces/models/dados/propsServicoPrestado";
import Id from "../id";

export default class ServicoPrestado extends Id {
  private servico: Servico;
  private faixaPrecoInicial: number;
  private faixaPrecoFinal: number;

  constructor(servico: PropsServicoPrestado) {
    super();
    this.id = servico.id;
    this.servico = servico.servico;
    this.faixaPrecoInicial = servico.faixaPrecoInicial;
    this.faixaPrecoFinal = servico.faixaPrecoFinal;
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

  static validar(servico: ServicoPrestado | PropsServicoPrestado): boolean {
    return servico instanceof ServicoPrestado
      ? servico.isValido()
      : new ServicoPrestado(servico).isValido();
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
