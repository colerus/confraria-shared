import { PerfilCliente, PerfilPrestador } from "../../../models/dados";
import Email from "../../../models/dados/email";
import Endereco from "../../../models/dados/endereco";
import Telefone from "../../../models/dados/telefone";
import PropsId from "../propsId";

export default interface PropsDadosPessoais extends PropsId {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  enderecos: Endereco[];
  telefones: Telefone[];
  emails?: Email[];
  perfil: PerfilCliente | PerfilPrestador;
}
