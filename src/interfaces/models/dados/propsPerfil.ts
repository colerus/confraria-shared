import DadosPessoais from "../../../base/models/dados/dadosPessoais";
import DadosExibicao from "../../../base/models/dados/dadosExibicao";
import DadosLogin from "../../../base/models/dados/dadosLogin";
import DadosCadastro from "../../../base/models/dados/dadosCadastro";
import PerfilSocial from "../../../base/models/dados/perfilSocial";
import TipoPerfil from "../../../tipos/tipoPerfil";

export default interface PropsPerfil {
    id?: string;
    dadosPessoais: DadosPessoais;
    dadosExibicao: DadosExibicao;
    dadosLogin: DadosLogin[];
    dadosCadastro: DadosCadastro;
    perfisSociais?: PerfilSocial[];
    tipoPerfil: TipoPerfil;
}