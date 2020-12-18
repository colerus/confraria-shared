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
    constructor(dados: PropsDadosCadastro);
    definirDataConfirmacao(data: Date | undefined): void;
    definirDataEnvioLinkConfirmacao(data: Date | undefined): void;
    obterId(): any;
    obterDataCadastro(): Date;
    obterDataConfirmacao(): Date | undefined;
    obterDataEnvioLinkConfirmacao(): Date | undefined;
    obterCodigoConfirmacao(): string | undefined;
    obterDataGeracaoCodigoConfirmacao(): Date | undefined;
    gerarNovoCodigoConfirmacao(): void;
    isValido(): boolean;
}
//# sourceMappingURL=dadosCadastro.d.ts.map