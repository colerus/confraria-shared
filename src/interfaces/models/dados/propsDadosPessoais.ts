import Email from "../../../models/dados/email";
import Endereco from "../../../models/dados/endereco";
import Telefone from "../../../models/dados/telefone";

export default interface PropsDadosPessoais {
  id?: string;
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  enderecos: Endereco[];
  telefones: Telefone[];
  emails?: Email[];
}
