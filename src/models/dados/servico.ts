import PropsServico from "../../interfaces/models/dados/propsServico";
import ServicoError from "../../exceptions/servicoError";
import Id from "../id";

export default class Servico extends Id {
  nome: string;
  derivacoes?: string[];
  parent?: Servico;
  childs?: Servico[];

  constructor(servico: PropsServico) {
    super(servico);
    this.nome = servico.nome;
    this.derivacoes = servico.derivacoes;
    this.parent = servico.parent;
  }

  definirId(id: string | undefined) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  definirParent(parent: Servico) {
    if (this.parent === undefined) {
      this.parent = parent;
    } else {
      throw new ServicoError("Parent já foi definido");
    }
  }

  adicionarDerivacao(derivacao: string) {
    if (derivacao.length < 3) {
      throw new ServicoError("Nome derivado inválido.");
    }
    if (this.derivacoes === undefined) {
      this.derivacoes = [];
    }
    this.derivacoes.push(derivacao);
  }

  obterId() {
    return this.id;
  }

  obterNome() {
    return this.nome;
  }

  obterDerivacoes() {
    return this.derivacoes;
  }

  obterParent() {
    return this.parent;
  }

  isValido(): boolean {
    return (
      this.isNomeValido() && this.isDerivacoesValidas() && this.isParentValido()
    );
  }
  isNomeValido(): boolean {
    return this.nome.length > 3;
  }
  isDerivacoesValidas(): boolean {
    return this.derivacoes
      ? this.derivacoes.every((current) => current.length > 3)
      : true;
  }
  isParentValido(): boolean {
    return this.parent ? true : false;
  }
}
