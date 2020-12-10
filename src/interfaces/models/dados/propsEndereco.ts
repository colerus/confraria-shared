export default interface PropsEndereco {
    id?: string;
    tipoLogradouro: string;
    logradouro: string;
    numero?: number;
    complemento?: string;
    codigoPostal?: string;
    cidade: string;
    estado: string;
    pais: string;
    referencia?: string;
}