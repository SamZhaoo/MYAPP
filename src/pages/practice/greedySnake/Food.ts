export class Food {
  ele: HTMLElement;
  constructor(dom: HTMLElement) {
    this.ele = dom;
  }
  get X() {
    return this.ele.offsetLeft;
  }
  set X(val: number) {
    this.X = val;
  }
  get Y() {
    return this.ele.offsetTop;
  }
  set Y(val: number) {
    this.Y = val;
  }
  change(val: number) {
    this.X = val;
  }
}
