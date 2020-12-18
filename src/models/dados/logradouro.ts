import { Id } from "..";
import Bairro from "./bairro";
import TipoLogradouro from "../../tipos/tipoLogradouro";
import PropsLogradouro from "../../interfaces/models/dados/propsLogradouro";
export default class Logradouro extends Id {
  public tipoLogradouro: TipoLogradouro;
  public logradouro: string;
  public bairro: Bairro;
  public codigoPostal: string;

  constructor(props: PropsLogradouro) {
    super(props);
    this.tipoLogradouro = props.tipoLogradouro;
    this.logradouro = props.logradouro;
    this.bairro = props.bairro;
    this.codigoPostal = props.codigoPostal;
  }

  isValido(): boolean {
    return (
      this.tipoLogradouro !== undefined &&
      this.logradouro.trim().length > 0 &&
      this.bairro !== undefined &&
      this.codigoPostal.trim.length > 5
    );
  }
}
