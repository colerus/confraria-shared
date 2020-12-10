import PropsPerfil from "./propsPerfil";
import ServicoPrestado from "../../../base/models/dados/servicoPrestado";

export default interface PropsPerfilPrestador extends PropsPerfil {
    servicosPrestados: ServicoPrestado[];
}