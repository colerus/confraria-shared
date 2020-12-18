import Midia from "./midia";
import PropsMidia from "../../interfaces/models/midia/propsMidia";
import PropsVideo from "../../interfaces/models/midia/propsVideo";
export default class Video extends Midia {
    duracao?: number;
    constructor(dados: PropsVideo | PropsMidia);
    alterarDuracao(duracao?: number): void;
    obterDuracao(): number | undefined;
    isValido(): boolean;
}
//# sourceMappingURL=video.d.ts.map