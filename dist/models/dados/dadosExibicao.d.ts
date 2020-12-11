import Foto from "../midia/foto";
import PropsDadosExibicao from "../../interfaces/models/dados/propsDadosExibicao";
import Id from "../id";
import Perfil from "./perfil";
export default class DadosExibicao extends Id {
    nomeCurto: string;
    nomeComercial?: string;
    fotoPerfil?: Foto;
    perfil: Perfil;
    constructor(dados: PropsDadosExibicao);
    definirId(id: string | undefined): void;
    alterarNomeCurto(nome: string): void;
    alterarNomeComercial(nome: string | undefined): void;
    alterarFotoPerfil(foto: Foto | undefined): void;
    obterId(): any;
    obterNomeCurto(): string;
    obterNomeComercial(): string | undefined;
    obterFoto(): Foto | undefined;
    static validar(dados: DadosExibicao | PropsDadosExibicao): boolean;
    private static isPropsDadosExibicaoValido;
    isValido(): boolean;
}
//# sourceMappingURL=dadosExibicao.d.ts.map