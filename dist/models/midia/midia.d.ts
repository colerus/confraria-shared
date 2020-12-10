import PropsMidia from "../../interfaces/models/midia/propsMidia";
import TipoMidia from "../../tipos/tipoMidia";
import Id from "../id";
export default class Midia extends Id {
    private readonly path;
    private readonly nomeOriginal;
    private readonly data;
    private titulo;
    private descricao;
    private ativo;
    private readonly tipoMidia;
    private readonly width?;
    private readonly height?;
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
}
//# sourceMappingURL=midia.d.ts.map