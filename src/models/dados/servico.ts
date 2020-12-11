import PropsServico from "../../interfaces/models/dados/propsServico";
import ServicoError from "../../exceptions/servicoError";
import Id from "../id";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity("servico")
export default class Servico extends Id {
  @Column()
  nome: string;
  @Column()
  derivacoes?: string[];
  @ManyToOne(() => Servico, (servico) => servico.childs)
  parent?: Servico;
  @OneToMany(() => Servico, (servico) => servico.parent)
  childs?: Servico[];

  constructor(servico: PropsServico) {
    super();
    this.id = servico.id;
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

  static validar(servico: Servico | PropsServico) {
    return servico instanceof Servico
      ? servico.isValido()
      : new Servico(servico).isValido();
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
    return this.parent ? this.parent.isValido() : true;
  }
}
