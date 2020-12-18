import Servico from "./servico";
import PropsServicoPrestado from "../../interfaces/models/dados/propsServicoPrestado";
import Id from "../id";
import { PerfilPrestador } from ".";
export default class ServicoPrestado extends Id {
    servico: Servico;
    faixaPrecoInicial: number;
    faixaPrecoFinal: number;
    perfis: PerfilPrestador[];
    constructor(servico: PropsServicoPrestado);
    definirId(id: string | undefined): void;
    alterarFaixaPrecoInicial(valor: number): void;
    alterarFaixaPrecoFinal(valor: number): void;
    obterId(): any;
    obterServico(): Servico;
    obterFaixaPrecoInicial(): number;
    obterFaixaPrecoFinal(): number;
    isValido(): boolean;
    isServicoValido(): boolean;
    isPrecoInicialValido(): boolean;
    isPrecoFinalValido(): boolean;
    isPrecosValidos(): boolean;
}
//# sourceMappingURL=servicoPrestado.d.ts.map