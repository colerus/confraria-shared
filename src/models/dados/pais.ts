import Id from "../id";
import Estado from "./estado";
import PropsPais from "../../interfaces/models/dados/propsPais";
export default class Pais extends Id {
  nome: string;
  sigla2: string;
  sigla3: string;
  sigla4: string;
  estados: Estado[];

  constructor(props: PropsPais) {
    super(props);
    this.nome = props.nome;
    this.sigla2 = props.sigla2;
    this.sigla3 = props.sigla3;
    this.sigla4 = props.sigla4;
    this.estados = props.estados;
  }
  isValido() {
    return (
      this.nome.trim().length > 3 &&
      this.sigla2.trim().length === 2 &&
      this.sigla3.trim().length === 3 &&
      this.sigla4.trim().length === 4
    );
  }
}
