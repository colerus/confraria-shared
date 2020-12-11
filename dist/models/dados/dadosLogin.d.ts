import TipoLogin from "../../tipos/tipoLogin";
import PropsDadosLogin from "../../interfaces/models/dados/propsDadosLogin";
import Id from "../id";
import { Perfil } from ".";
export default class DadosLogin extends Id {
    tipoLogin: TipoLogin;
    usuario: string;
    senha: string;
    senhaCriptografada: boolean;
    perfil: Perfil;
    constructor(dados: PropsDadosLogin, tipoLogin: TipoLogin);
    definirId(id: string | undefined): void;
    definirSenhaCriptografada(hash: string): void;
    alterarSenha(senha: string): void;
    obterId(): any;
    obterTipoLogin(): TipoLogin;
    obterUsuario(): string;
    obterSenha(): string;
    gerarNovaSenha(): void;
    encriptarSenha(): Promise<string>;
    static validar(dados: DadosLogin | PropsDadosLogin, tipoLogin: TipoLogin): boolean;
    private static validarDadosLogin;
    private static validarPropsDadosLogin;
    isValido(): boolean;
    private tipoLoginValido;
    private usuarioValido;
    private senhaValida;
    private senhaFoiCriptografada;
}
//# sourceMappingURL=dadosLogin.d.ts.map