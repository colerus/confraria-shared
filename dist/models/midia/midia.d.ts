import PropsMidia from "../../interfaces/models/midia/propsMidia";
import TipoMidia from "../../tipos/tipoMidia";
import Id from "../id";
export default class Midia extends Id {
    path: string;
    nomeOriginal: string;
    data: Date;
    titulo: string;
    descricao: string;
    ativo: boolean;
    tipoMidia: TipoMidia;
    width?: number;
    height?: number;
    constructor(props: PropsMidia, tipoMidia: TipoMidia);
    alterarId(id: string | undefined): void;
    alterarTitulo(titulo: string | undefined): void;
    alterarDescricao(descricao: string | undefined): void;
    ativar(): void;
    desativar(): void;
    obterId(): any;
    obterPath(): string;
    obterData(): Date;
    obterNomeOriginal(): string;
    obterTitulo(): string;
    obterDescricao(): string;
    isAtivo(): boolean;
    obterWisth(): number | undefined;
    obterHeight(): number | undefined;
    obterTipoMidia(): TipoMidia;
    isValido(): boolean;
}
//# sourceMappingURL=midia.d.ts.map