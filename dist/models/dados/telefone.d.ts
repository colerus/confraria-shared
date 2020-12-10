import TipoFuncaoTelefone from "../../tipos/tipoFuncaoTelefone";
import TipoTelefone from "../../tipos/tipoTelefone";
import PropsTelefone from "../../interfaces/models/dados/propsTelefone";
import PhoneNumber from "awesome-phonenumber";
import Id from "../id";
export default class Telefone extends Id {
    private codigoPais;
    private codigoArea?;
    private numero;
    private ramal?;
    private tipoTelefone;
    private tipoFuncao;
    private whatsapp;
    constructor(dados: PropsTelefone);
    alterarId(id?: string): void;
    alterarTelefone(telefone: string | PhoneNumber): void;
    alterarTipoFuncao(tipoFuncao?: TipoFuncaoTelefone): void;
    alterarIsWhatsapp(whatsapp: boolean): void;
    alterarRamal(ramal: string | undefined): void;
    obterId(): any;
    obterCodigoPais(): number;
    obterCodigoArea(): number | undefined;
    obterNumero(): string;
    obterTipoTelefone(): TipoTelefone;
    obterTipoFuncao(): TipoFuncaoTelefone;
    obterRamal(): string | undefined;
    isWhatsapp(): boolean;
    toString(): string;
    toStringFormatado(): string;
    static validar(telefone: Telefone | string | PhoneNumber): boolean;
    isValido(): boolean;
}
//# sourceMappingURL=telefone.d.ts.map