import Servico from "./servico";
import PropsServicoPrestado from "../../interfaces/models/dados/propsServicoPrestado";
import Id from "../id";
export default class ServicoPrestado extends Id {
    private servico;
    private faixaPrecoInicial;
    private faixaPrecoFinal;
    constructor(servico: PropsServicoPrestado);
    definirId(id: string | undefined): void;
    alterarFaixaPrecoInicial(valor: number): void;
    alterarFaixaPrecoFinal(valor: number): void;
    obterId(): any;
    obterServico(): Servico;
    obterFaixaPrecoInicial(): number;
    obterFaixaPrecoFinal(): number;
    static validar(servico: ServicoPrestado | PropsServicoPrestado): boolean;
    isValido(): boolean;
    isServicoValido(): boolean;
    isPrecoInicialValido(): boolean;
    isPrecoFinalValido(): boolean;
    isPrecosValidos(): boolean;
}
//# sourceMappingURL=servicoPrestado.d.ts.map