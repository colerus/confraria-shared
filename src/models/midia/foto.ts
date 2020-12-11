import Midia from "./midia";
import PropsMidia from "../../interfaces/models/midia/propsMidia";
import TipoMidia from "../../tipos/tipoMidia";
import { ChildEntity } from "typeorm";

@ChildEntity(TipoMidia.IMAGEM)
export default class Foto extends Midia {
  constructor(dados: PropsMidia) {
    super(dados, TipoMidia.IMAGEM);
  }
}
