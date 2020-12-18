import Id from "../id";
import Cidade from "./cidade";
import PropsEstado from "../../interfaces/models/dados/propsEstado";
import Pais from "./pais";
export default class Estado extends Id {
  nome: string;
  sigla: string;
  pais: Pais;
  cidades: Cidade[];

  constructor(props: PropsEstado) {
    super(props);
    this.nome = props.nome;
    this.sigla = props.sigla;
    this.pais = props.pais;
    this.cidades = props.cidades;
  }
  isValido() {
    return (
      this.nome.trim().length > 2 &&
      this.sigla.trim().length === 2 &&
      this.pais !== undefined &&
      this.cidades !== undefined
    );
  }
}
