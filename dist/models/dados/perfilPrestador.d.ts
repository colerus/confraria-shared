import Perfil from "./perfil";
import ServicoPrestado from "./servicoPrestado";
import PropsPerfilPrestador from "../../interfaces/models/dados/propsPerfilPrestador";
export default class PerfilPrestador extends Perfil {
    servicos: ServicoPrestado[];
    constructor(perfil: PropsPerfilPrestador);
    adicionarServicoPrestado(servico: ServicoPrestado): void;
    removerServicoPrestado(servico: ServicoPrestado): void;
    obterServicosPrestados(): ServicoPrestado[];
    isValido(): boolean;
    isServicosValidos(): boolean;
}
//# sourceMappingURL=perfilPrestador.d.ts.map