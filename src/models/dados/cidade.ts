import Id from "../id";
import Bairro from "./bairro";
import PropsCidade from "../../interfaces/models/dados/propsCidade";
import Estado from "./estado";
export default class Cidade extends Id {
  public nome: string;
  public estado: Estado;
  public bairros: Bairro[];

  constructor(props: PropsCidade) {
    super(props);
    this.nome = props.nome;
    this.estado = props.estado;
    this.bairros = props.bairros;
  }
  isValido() {
    return (
      this.nome.trim().length > 1 &&
      this.estado !== undefined &&
      this.bairros !== undefined
    );
  }
}
