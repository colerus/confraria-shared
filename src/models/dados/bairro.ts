import { Id } from "..";
import Logradouro from "./logradouro";
import PropsBairro from "../../interfaces/models/dados/propsBairro";
import Cidade from "./cidade";
export default class Bairro extends Id {
  public nome: string;
  public logradouros: Logradouro[];
  public codigoPostal: string;
  public cidade: Cidade;

  constructor(props: PropsBairro) {
    super(props);
    this.nome = props.nome;
    this.logradouros = props.logradouros;
    this.codigoPostal = props.codigoPostal;
    this.cidade = props.cidade;
  }
  isValido() {
    return (
      this.nome.trim().length > 0 &&
      this.logradouros !== undefined &&
      this.codigoPostal.trim().length > 5 &&
      this.cidade !== undefined
    );
  }
}
