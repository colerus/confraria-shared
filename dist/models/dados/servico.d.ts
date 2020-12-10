import PropsServico from "../../interfaces/models/dados/propsServico";
import Id from "../id";
export default class Servico extends Id {
    private nome;
    private derivacoes?;
    private parent?;
    constructor(servico: PropsServico);
    definirId(id: string | undefined): void;
    definirParent(parent: Servico): void;
    adicionarDerivacao(derivacao: string): void;
    obterId(): any;
    obterNome(): string;
    obterDerivacoes(): string[] | undefined;
    obterParent(): Servico | undefined;
    static validar(servico: Servico | PropsServico): boolean;
    isValido(): boolean;
    isNomeValido(): boolean;
    isDerivacoesValidas(): boolean;
    isParentValido(): boolean;
}
//# sourceMappingURL=servico.d.ts.map