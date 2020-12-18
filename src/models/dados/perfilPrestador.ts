import Perfil from "./perfil";
import ServicoPrestado from "./servicoPrestado";
import PropsPerfilPrestador from "../../interfaces/models/dados/propsPerfilPrestador";
import TipoPerfil from "../../tipos/tipoPerfil";

export default class PerfilPrestador extends Perfil {
  servicos: ServicoPrestado[];

  constructor(perfil: PropsPerfilPrestador) {
    super({ ...perfil, tipoPerfil: TipoPerfil.USUARIO });
    this.servicos = perfil.servicosPrestados;
  }

  adicionarServicoPrestado(servico: ServicoPrestado) {
    this.servicos.push(servico);
  }

  removerServicoPrestado(servico: ServicoPrestado) {
    const index = this.servicos.indexOf(servico);
    if (index >= 0) {
      this.servicos.splice(index, 1);
    }
  }

  obterServicosPrestados() {
    return this.servicos;
  }

  isValido(): boolean {
    return super.isValido() && this.isServicosValidos();
  }
  isServicosValidos(): boolean {
    return this.servicos && this.servicos.length > 0 ? true : false;
  }
}
