import Perfil from "./perfil";
import ServicoPrestado from "./servicoPrestado";
import PropsPerfilPrestador from "../../interfaces/models/dados/propsPerfilPrestador";
import TipoPerfil from "../../tipos/tipoPerfil";
import { ChildEntity, ManyToMany } from "typeorm";

@ChildEntity(TipoPerfil.USUARIO)
export default class PerfilPrestador extends Perfil {
  @ManyToMany(() => ServicoPrestado, (servico) => servico.perfis)
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

  static validar(perfil: PerfilPrestador | PropsPerfilPrestador): boolean {
    return perfil instanceof PerfilPrestador
      ? perfil.isValido()
      : new PerfilPrestador(perfil).isValido();
  }

  isValido(): boolean {
    return super.isValido() && this.isServicosValidos();
  }
  isServicosValidos(): boolean {
    return this.servicos.every((current) => current.isValido()) || false;
  }
}
