import PropsId from "../interfaces/models/propsId";
export default abstract class Id {
    id: any;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    version?: string;
    constructor(props: PropsId);
    definirId(id: any): void;
    obterId(): any;
    abstract isValido(): boolean;
    static Validar(obj: Id): boolean;
}
//# sourceMappingURL=id.d.ts.map