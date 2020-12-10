export default class Id {
  protected id: any;
  definirId(id: any) {
    if (!this.id) this.id = id;
  }
  obterId() {
    return this.id;
  }
}
