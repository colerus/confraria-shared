import TipoPerfil from "../../tipos/tipoPerfil";
import DadosPessoais from "./dadosPessoais";
import DadosExibicao from "./dadosExibicao";
import DadosLogin from "./dadosLogin";
import DadosCadastro from "./dadosCadastro";
import PerfilSocial from "./perfilSocial";
import PropsPerfil from "../../interfaces/models/dados/propsPerfil";
import Id from "../id";
export default class Perfil extends Id {
    private dadosPessoais;
    private dadosExibicao;
    private dadosLogin;
    private dadosCadastro;
    private perfisSociais?;
    private tipoPerfil;
    constructor(dados: PropsPerfil);
    definirId(id: string | undefined): void;
    adicionarDadosLogin(dadosLogin: DadosLogin): void;
    adicionarPerfilSocial(perfil: PerfilSocial): void;
    removerDadosLogin(dadosLogin: DadosLogin): void;
    removerPerfilSocial(perfil: PerfilSocial): void;
    obterId(): any;
    obterDadosPessoais(): DadosPessoais;
    obterDadosExibicao(): DadosExibicao;
    obterDadosLogin(): DadosLogin[];
    obterDadosCadastro(): DadosCadastro;
    obterPerfisSociais(): PerfilSocial[] | undefined;
    obterTipoPerfil(): TipoPerfil;
    static validar(perfil: Perfil | PropsPerfil): boolean;
    isValido(): boolean;
    isTipoPerfilValido(): boolean;
    isDadosPessoaisValidos(): boolean;
    isDadosExibicaoValidos(): boolean;
    isDadosLoginValidos(): boolean;
    isDadosCadastroValidos(): boolean;
    isPerfisSociaisValidos(): boolean;
}
//# sourceMappingURL=perfil.d.ts.map