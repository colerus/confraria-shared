import DadosCadastro from "../../../models/dados/dadosCadastro";
import DadosExibicao from "../../../models/dados/dadosExibicao";
import DadosLogin from "../../../models/dados/dadosLogin";
import DadosPessoais from "../../../models/dados/dadosPessoais";
import PerfilSocial from "../../../models/dados/perfilSocial";
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
