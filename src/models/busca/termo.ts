import { Id } from "..";
import { TipoTermoBusca } from "../../tipos";
import PropsTermo from "../../interfaces/models/busca/propsTermo";
import { Column, Entity, OneToMany } from "typeorm";
import TermoBusca from "./termoBusca";

@Entity("termo")
export default class Termo extends Id {
  @Column()
  public tipoTermo: TipoTermoBusca;
  @Column()
  public valor: string;
  @OneToMany(() => TermoBusca, (busca) => busca.id)
  public termoBuscas: TermoBusca[];

  constructor(termo: PropsTermo) {
    super();
    this.id = termo.id;
    this.tipoTermo = termo.tipoTermo;
    this.valor = termo.valor;
    this.termoBuscas = termo.termoBuscas;
  }
}
