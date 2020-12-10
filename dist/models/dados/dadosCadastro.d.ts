import PropsDadosCadastro from "../../interfaces/models/dados/propsDadosCadastro";
import Id from "../id";
export default class DadosCadastro extends Id {
    private dataCadastro;
    private dataConfirmacao?;
    private dataEnvioLinkConfirmacao?;
    private dataGeracaoCodigoConfirmacao?;
    private codigoConfirmacao?;
    constructor(dados: PropsDadosCadastro);
    definirId(id: string | undefined): void;
    definirDataConfirmacao(data: Date | undefined): void;
    definirDataEnvioLinkConfirmacao(data: Date | undefined): void;
    obterId(): any;
    obterDataCadastro(): Date;
    obterDataConfirmacao(): Date | undefined;
    obterDataEnvioLinkConfirmacao(): Date | undefined;
    obterCodigoConfirmacao(): string | undefined;
    obterDataGeracaoCodigoConfirmacao(): Date | undefined;
    gerarNovoCodigoConfirmacao(): void;
    static validar(dados: DadosCadastro | PropsDadosCadastro): boolean;
    isValido(): boolean;
}
//# sourceMappingURL=dadosCadastro.d.ts.map