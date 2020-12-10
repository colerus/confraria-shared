import ServicoPrestado from "../../../models/dados/servicoPrestado";
import PropsPerfil from "./propsPerfil";

export default interface PropsPerfilPrestador extends PropsPerfil {
  servicosPrestados: ServicoPrestado[];
}
