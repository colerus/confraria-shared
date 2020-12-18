import PropsServico from "../../interfaces/models/dados/propsServico";
import Id from "../id";
export default class Servico extends Id {
    nome: string;
    derivacoes?: string[];
    parent?: Servico;
    childs?: Servico[];
    constructor(servico: PropsServico);
    definirId(id: string | undefined): void;
    definirParent(parent: Servico): void;
    adicionarDerivacao(derivacao: string): void;
    obterId(): any;
    obterNome(): string;
    obterDerivacoes(): string[] | undefined;
    obterParent(): Servico | undefined;
    isValido(): boolean;
    isNomeValido(): boolean;
    isDerivacoesValidas(): boolean;
    isParentValido(): boolean;
}
//# sourceMappingURL=servico.d.ts.map