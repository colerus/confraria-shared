import TipoLogin from "../../tipos/tipoLogin";
import PropsDadosLogin from "../../interfaces/models/dados/propsDadosLogin";
import Generator from "generate-password";
import { BCRYPT_SALT } from "../../config";
import Id from "../id";
import { encriptar } from "../../utils/crypto";
import { Perfil } from ".";

export default class DadosLogin extends Id {
  tipoLogin: TipoLogin;
  usuario: string;
  senha: string;
  senhaCriptografada: boolean;
  perfil: Perfil;

  constructor(dados: PropsDadosLogin, tipoLogin: TipoLogin) {
    super(dados);
    this.tipoLogin = tipoLogin;
    this.usuario = dados.usuario;
    this.senha = dados.senha;
    this.senhaCriptografada = false;
    this.perfil = dados.perfil;
  }

  definirId(id: string | undefined) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  definirSenhaCriptografada(hash: string): void {
    this.senha = hash;
    this.senhaCriptografada = true;
  }

  alterarSenha(senha: string) {
    this.senha = senha;
  }

  obterId() {
    return this.id;
  }

  obterTipoLogin() {
    return this.tipoLogin;
  }

  obterUsuario() {
    return this.usuario;
  }

  obterSenha() {
    return this.senha;
  }

  gerarNovaSenha() {
    this.senha = Generator.generate({
      length: 10,
      numbers: true,
      lowercase: true,
      uppercase: true,
      symbols: true,
    });
    this.senhaCriptografada = false;
  }

  public async encriptarSenha(): Promise<string> {
    return this.senhaFoiCriptografada()
      ? this.senha
      : await encriptar(this.senha, BCRYPT_SALT, (_err, hash) => {
          this.definirSenhaCriptografada(hash);
        }).then(() => this.senha);
  }

  isValido(): boolean {
    return (
      this.tipoLoginValido() &&
      this.usuarioValido() &&
      (this.senhaValida() || this.senhaFoiCriptografada())
    );
  }

  private tipoLoginValido(): boolean {
    return this.tipoLogin !== undefined;
  }

  private usuarioValido(): boolean {
    return this.usuario.length >= 5;
  }
  private senhaValida(): boolean {
    return this.senha.length >= 8;
  }
  private senhaFoiCriptografada(): boolean {
    return this.senhaValida() && this.senhaCriptografada === true;
  }
}
