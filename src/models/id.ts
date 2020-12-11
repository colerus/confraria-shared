import { PrimaryColumn } from "typeorm";

export default class Id {
  @PrimaryColumn()
  public id: any;
  definirId(id: any) {
    if (!this.id) this.id = id;
  }
  obterId() {
    return this.id;
  }
}
