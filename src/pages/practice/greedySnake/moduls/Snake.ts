export class Snake {
  ele: HTMLElement;
  eleFarther: HTMLElement;
  // 身体
  body: Array<object> = [{}];
  constructor(dom: HTMLElement) {
    this.eleFarther = dom;
    this.ele = dom.childNodes[0] as HTMLElement;
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
  moveBody() {
    const list = this.eleFarther.childNodes;
    // 只有一个方块的时候不处理
    if (list.length < 2) return;

    for (let i = list.length - 1; i > 0; i--) {
      const x = (list[i - 1] as HTMLElement).offsetLeft;
      const y = (list[i - 1] as HTMLElement).offsetTop;
      const element: HTMLElement = list[i] as HTMLElement;
      element.style.left = x + 'px';
      element.style.top = y + 'px';
    }
  }
}
