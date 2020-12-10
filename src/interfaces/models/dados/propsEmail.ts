import TipoEmail from "../../../tipos/tipoEmail";

export default interface PropsEmail {
    id?: string;
    email: string;
    tipoEmail: TipoEmail;
}