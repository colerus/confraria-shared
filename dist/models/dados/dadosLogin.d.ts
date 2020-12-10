import TipoLogin from "../../tipos/tipoLogin";
import PropsDadosLogin from "../../interfaces/models/dados/propsDadosLogin";
import Id from "../id";
export default class DadosLogin extends Id {
    private tipoLogin;
    private usuario;
    private senha;
    private senhaCriptografada;
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