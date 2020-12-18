import Id from "../id";
import Mensagem from "./mensagem";
import PropsChat from "../../interfaces/models/chat/propsChat";
import SalaBusca from "./salaBusca";
import { PerfilPrestador } from "../dados";
export default class Chat extends Id {
    salaBusca: SalaBusca;
    prestador: PerfilPrestador;
    mensagens?: Mensagem[];
    ativo: boolean;
    constructor(props: PropsChat);
    ativar(): void;
    desativar(): void;
    adicionarMensagem(mensagem: Mensagem): void;
    obterSalaBusca(): SalaBusca;
    obterPrestador(): PerfilPrestador;
    obterMensagens(): Mensagem[] | undefined;
    isAtivo(): boolean;
    isValido(): boolean;
}
//# sourceMappingURL=chat.d.ts.map