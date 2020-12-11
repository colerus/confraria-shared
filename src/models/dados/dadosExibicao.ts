import Foto from "../midia/foto";
import PropsDadosExibicao from "../../interfaces/models/dados/propsDadosExibicao";
import Id from "../id";
import { Column, Entity, OneToOne } from "typeorm";
import Perfil from "./perfil";

@Entity("dados_exibicao")
export default class DadosExibicao extends Id {
  @Column()
  nomeCurto: string;
  @Column()
  nomeComercial?: string;
  @OneToOne(() => Foto)
  fotoPerfil?: Foto;
  @OneToOne(() => Perfil, (perfil) => perfil.dadosPessoais)
  perfil: Perfil;

  constructor(dados: PropsDadosExibicao) {
    super();
    this.id = dados.id;
    this.nomeCurto = dados.nomeCurto;
    this.nomeComercial = dados.nomeComercial;
    this.fotoPerfil = dados.fotoPerfil;
    this.perfil = dados.perfil;
  }

  definirId(id: string | undefined) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  alterarNomeCurto(nome: string) {
    this.nomeCurto = nome;
  }

  alterarNomeComercial(nome: string | undefined) {
    this.nomeComercial = nome;
  }

  alterarFotoPerfil(foto: Foto | undefined) {
    this.fotoPerfil = foto;
  }

  obterId() {
    return this.id;
  }

  obterNomeCurto() {
    return this.nomeCurto;
  }

  obterNomeComercial() {
    return this.nomeComercial;
  }

  obterFoto() {
    return this.fotoPerfil;
  }

  static validar(dados: DadosExibicao | PropsDadosExibicao): boolean {
    return dados instanceof DadosExibicao
      ? dados.obterNomeCurto().length >= 5
      : DadosExibicao.isPropsDadosExibicaoValido(dados);
  }

  private static isPropsDadosExibicaoValido(
    props: PropsDadosExibicao
  ): boolean {
    const temp = new DadosExibicao(props);
    return temp.isValido();
  }

  isValido(): boolean {
    return DadosExibicao.validar(this);
  }
}
