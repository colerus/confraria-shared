import Id from "../id";
import Mensagem from "./mensagem";
import PropsChat from "../../interfaces/models/chat/propsChat";
import SalaBusca from "./salaBusca";
export default class Chat extends Id {
    private readonly salaBusca;
    private readonly idPrestador;
    private readonly mensagens?;
    private ativo;
    constructor(props: PropsChat);
    ativar(): void;
    desativar(): void;
    adicionarMensagem(mensagem: Mensagem): void;
    obterSalaBusca(): SalaBusca;
    obterIdPrestador(): Id;
    obterMensagens(): Mensagem[] | undefined;
    isAtivo(): boolean;
}
//# sourceMappingURL=chat.d.ts.map