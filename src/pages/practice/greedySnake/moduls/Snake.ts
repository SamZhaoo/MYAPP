export class Snake {
  ele: HTMLElement;
  // 身体
  body: Array<object> = [{}];
  constructor(dom: HTMLElement) {
    this.ele = dom;
  }
  get X() {
    return this.ele.offsetLeft;
  }
  set X(val: number) {
    if (val < 0 || val > 332) {
      throw new Error('撞墙了');
    }
    this.ele.style.left = val + 'px';
  }
  get Y() {
    return this.ele.offsetTop;
  }
  set Y(val: number) {
    if (val < 0 || val > 332) {
      throw new Error('撞墙了');
    }
    this.ele.style.top = val + 'px';
  }
  addBody() {
    this.body.push({});
  }
  moveBody() {}
}
