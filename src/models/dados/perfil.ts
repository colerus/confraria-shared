import TipoPerfil from "../../tipos/tipoPerfil";
import DadosPessoais from "./dadosPessoais";
import DadosExibicao from "./dadosExibicao";
import DadosLogin from "./dadosLogin";
import DadosCadastro from "./dadosCadastro";
import PerfilSocial from "./perfilSocial";
import PropsPerfil from "../../interfaces/models/dados/propsPerfil";
import PerfilError from "../../exceptions/perfilError";
import Id from "../id";
import { Entity, OneToOne, OneToMany, Column, TableInheritance } from "typeorm";

@Entity("perfil")
@TableInheritance({ column: { name: "tipoPerfil", type: "varchar" } })
export default class Perfil extends Id {
  @OneToOne(() => DadosPessoais, (dados) => dados.perfil)
  dadosPessoais: DadosPessoais;
  @OneToOne(() => DadosExibicao, (dados) => dados.perfil)
  dadosExibicao: DadosExibicao;
  @OneToMany(() => DadosLogin, (login) => login.perfil)
  dadosLogin: DadosLogin[];
  @OneToOne(() => DadosCadastro, (dados) => dados.perfil)
  dadosCadastro: DadosCadastro;
  @OneToMany(() => PerfilSocial, (perfil) => perfil.perfil)
  perfisSociais?: PerfilSocial[];
  @Column()
  tipoPerfil: TipoPerfil;

  constructor(dados: PropsPerfil) {
    super();
    this.id = dados.id;
    this.dadosPessoais = dados.dadosPessoais;
    this.dadosExibicao = dados.dadosExibicao;
    this.dadosLogin = dados.dadosLogin;
    this.dadosCadastro = dados.dadosCadastro;
    this.perfisSociais = dados.perfisSociais;
    this.tipoPerfil = dados.tipoPerfil;
  }

  definirId(id: string | undefined) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  adicionarDadosLogin(dadosLogin: DadosLogin) {
    if (!dadosLogin.isValido()) {
      throw new PerfilError("Dados de login inválidos");
    }
    this.dadosLogin.push(dadosLogin);
  }

  adicionarPerfilSocial(perfil: PerfilSocial) {
    //TODO: Implementar
    if (this.perfisSociais === undefined) {
      this.perfisSociais = [];
    }
    this.perfisSociais.push(perfil);
  }

  removerDadosLogin(dadosLogin: DadosLogin) {
    const index = this.dadosLogin.indexOf(dadosLogin);
    if (index >= 0) {
      this.dadosLogin.splice(index, 1);
    }
  }

  removerPerfilSocial(perfil: PerfilSocial) {
    if (this.perfisSociais === undefined) {
      this.perfisSociais = [];
    }
    const index = this.perfisSociais.indexOf(perfil);
    if (index >= 0) {
      this.perfisSociais.splice(index, 1);
    }
  }

  obterId() {
    return this.id;
  }

  obterDadosPessoais() {
    return this.dadosPessoais;
  }

  obterDadosExibicao() {
    return this.dadosExibicao;
  }

  obterDadosLogin() {
    return this.dadosLogin;
  }

  obterDadosCadastro() {
    return this.dadosCadastro;
  }

  obterPerfisSociais() {
    return this.perfisSociais;
  }

  obterTipoPerfil() {
    return this.tipoPerfil;
  }

  static validar(perfil: Perfil | PropsPerfil): boolean {
    return perfil instanceof Perfil
      ? perfil.isValido()
      : new Perfil(perfil).isValido();
  }

  public isValido(): boolean {
    return (
      this.isTipoPerfilValido() &&
      this.isDadosPessoaisValidos() &&
      this.isDadosCadastroValidos() &&
      this.isDadosExibicaoValidos() &&
      this.isDadosLoginValidos() &&
      this.isPerfisSociaisValidos()
    );
  }
  isTipoPerfilValido(): boolean {
    return (
      this.tipoPerfil === TipoPerfil.CLIENTE ||
      this.tipoPerfil === TipoPerfil.USUARIO
    );
  }
  isDadosPessoaisValidos(): boolean {
    return this.dadosPessoais.isValido();
  }
  isDadosExibicaoValidos(): boolean {
    return this.dadosExibicao.isValido();
  }
  isDadosLoginValidos(): boolean {
    return this.dadosLogin.every((current) => current.isValido());
  }
  isDadosCadastroValidos(): boolean {
    return this.dadosCadastro.isValido();
  }
  isPerfisSociaisValidos(): boolean {
    return this.perfisSociais
      ? this.perfisSociais.every((current) => current.isValido())
      : true;
  }
}
