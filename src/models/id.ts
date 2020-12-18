import PropsId from "../interfaces/models/propsId";
export default abstract class Id {
  public id: any;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;
  public version?: string;

  constructor(props: PropsId) {
    this.definirId(props.id);
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
    this.version = props.version;
  }

  definirId(id: any) {
    if (!this.id) this.id = id;
  }
  obterId() {
    return this.id;
  }

  abstract isValido(): boolean;

  static Validar(obj: Id) {
    return obj.isValido();
  }
}
