export class Snake {
  ele: HTMLElement;
  isHorizontal: boolean;
  constructor(dom: HTMLElement) {
    this.ele = dom;
    this.isHorizontal = true;
  }
  get X() {
    return this.ele.offsetLeft;
  }
  get Y() {
    return this.ele.offsetTop;
  }
  changeBody(horizontal: boolean) {
    this.isHorizontal = horizontal;
    this.ele.style.width = this.isHorizontal ? 'auto' : '6px';
  }
  changePosition() {
    const left = Math.round(Math.random() * 35) * 10;
    const top = Math.round(Math.random() * 37) * 10;
    this.ele.style.left = left + 'px';
    this.ele.style.top = top + 'px';
  }
}
