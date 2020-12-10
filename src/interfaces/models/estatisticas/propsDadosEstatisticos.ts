import TipoOrigem from "../../../tipos/tipoOrigem";

export default interface PropsDadosEstatisticos {
    id?: string;
    peso?: number;
    data?: Date;
    origem?: string;
    tipoOrigem?: TipoOrigem;
}