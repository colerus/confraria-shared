import Endereco from "../../../base/models/dados/endereco";
import Telefone from "../../../base/models/dados/telefone";
import Email from "../../../base/models/dados/email";

export default interface PropsDadosPessoais {
    id?: string;
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
    enderecos: Endereco[];
    telefones: Telefone[];
    emails?: Email[];
}