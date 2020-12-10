import Endereco from "./endereco";
import Telefone from "./telefone";
import Email from "./email";
import PropsDadosPessoais from "../../interfaces/models/dados/propsDadosPessoais";
import propsDadosPessoais from "../../interfaces/models/dados/propsDadosPessoais";
import PropsEndereco from "../../interfaces/models/dados/propsEndereco";
import TipoEndereco from "../../tipos/tipoEndereco";
import EnderecoError from "../../exceptions/enderecoError";
import PropsTelefone from "../../interfaces/models/dados/propsTelefone";
import TelefoneError from "../../exceptions/telefoneError";
import PropsEmail from "../../interfaces/models/dados/propsEmail";
import PhoneNumber from "awesome-phonenumber";
import { calcularIdade } from "../../utils/data";
import DadosPessoaisError from "../../exceptions/dadosPessoaisError";
import { converterParaTelefone } from "../../utils/telefone";
import { converterParaEmail } from "../../utils/email";
import EmailError from "../../exceptions/emailError";
import Id from "../id";

export default class DadosPessoais extends Id {
  private nome: string;
  private sobrenome: string;
  private dataNascimento: Date;
  private enderecos: Endereco[];
  private telefones: Telefone[];
  private emails?: Email[];

  constructor(dados: PropsDadosPessoais) {
    super();
    this.id = dados.id;
    this.nome = dados.nome;
    this.sobrenome = dados.sobrenome;
    this.dataNascimento = dados.dataNascimento;
    this.enderecos = dados.enderecos;
    this.telefones = dados.telefones;
    this.emails = dados.emails;
  }

  alterarId(id?: string) {
    if (this.id === undefined) {
      this.id = id;
    }
  }

  alterarNome(nome: string) {
    this.nome = nome;
  }

  alterarSobrenome(sobrenome: string) {
    this.sobrenome = sobrenome;
  }

  alterarDataNascimento(dataNascimento: Date) {
    const idade = calcularIdade(dataNascimento);
    if (idade < 18) {
      throw new DadosPessoaisError("Deve ter pelo menos 18 anos");
    }
    this.dataNascimento = dataNascimento;
  }

  adicionarEndereco(
    endereco: Endereco | PropsEndereco,
    tipoEndereco?: TipoEndereco
  ) {
    endereco =
      endereco instanceof Endereco
        ? endereco
        : new Endereco(endereco, tipoEndereco || TipoEndereco.INDEFINIDO);
    if (!endereco.isValido()) {
      throw new EnderecoError("Endereço inválido");
    }
    this.enderecos.push(endereco);
  }

  adicionarTelefone(telefone: Telefone | PropsTelefone | string | PhoneNumber) {
    const novo = converterParaTelefone(telefone);
    if (!novo.isValido()) {
      throw new TelefoneError("Telefone Inválido");
    }
    this.telefones.push(novo);
  }

  adicionarEmail(email: string | Email | PropsEmail) {
    email = converterParaEmail(email);
    if (!email.isValido()) {
      throw new EmailError("E-mail inválido");
    }
    if (this.emails === undefined) {
      this.emails = [];
    }
    this.emails.push(email);
  }

  removerEndereco(endereco: Endereco) {
    const index = this.enderecos.indexOf(endereco);
    if (index >= 0) {
      this.enderecos.splice(index, 1);
    }
  }

  removerTelefone(telefone: Telefone) {
    const index = this.telefones.indexOf(telefone);
    if (index >= 0) {
      this.telefones.splice(index, 1);
    }
  }

  removerEmail(email: Email) {
    if (this.emails === undefined) {
      return;
    }
    const index = this.emails.indexOf(email);
    if (index >= 0) {
      this.emails.splice(index, 1);
    }
  }

  obterId() {
    return this.id;
  }

  obterNome() {
    return this.nome;
  }

  obterSobrenome() {
    return this.sobrenome;
  }

  obterDataNascimento() {
    return this.dataNascimento;
  }

  obterEnderecos() {
    return this.enderecos;
  }

  obterTelefones() {
    return this.telefones;
  }

  obterEmails() {
    return this.emails;
  }

  static validar(dadosPessoais: DadosPessoais | propsDadosPessoais): boolean {
    return dadosPessoais instanceof DadosPessoais
      ? dadosPessoais.isValido()
      : new DadosPessoais(dadosPessoais).isValido();
  }

  isValido() {
    return (
      this.isNomeCompletoValido() &&
      this.isDataNascimentoValida() &&
      this.isEmailsValidos() &&
      this.isEnderecosValidos() &&
      this.isTelefonesValidos()
    );
  }
  isNomeValido(): boolean {
    return this.nome.length > 0;
  }
  isSobrenomeValido(): boolean {
    return this.sobrenome.length > 0;
  }
  isNomeCompletoValido(): boolean {
    return this.isNomeValido && this.isSobrenomeValido();
  }
  isDataNascimentoValida(): boolean {
    return calcularIdade(this.obterDataNascimento()) >= 18;
  }
  isEmailsValidos(): boolean {
    return this.emails
      ? this.emails.every((current) => current.isValido())
      : false;
  }
  isEnderecosValidos(): boolean {
    return this.enderecos
      ? this.enderecos.every((current) => current.isValido())
      : false;
  }
  isTelefonesValidos(): boolean {
    return this.telefones
      ? this.telefones.every((current) => current.isValido())
      : false;
  }
}
