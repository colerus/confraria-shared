import Foto from "../midia/foto";
import PropsDadosExibicao from "../../interfaces/models/dados/propsDadosExibicao";
import Id from "../id";
import Perfil from "./perfil";

export default class DadosExibicao extends Id {
  nomeCurto: string;
  nomeComercial?: string;
  fotoPerfil?: Foto;
  perfil: Perfil;

  constructor(dados: PropsDadosExibicao) {
    super(dados);
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

  isValido(): boolean {
    return this.nomeCurto.trim.length > 1 && this.perfil !== undefined;
  }
}
