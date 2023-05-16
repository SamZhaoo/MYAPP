export class Food {
  ele: HTMLElement;
  constructor(dom: HTMLElement) {
    this.ele = dom;
  }
  get X() {
    return this.ele.offsetLeft;
  }
  get Y() {
    return this.ele.offsetTop;
  }
  changePosition() {
    const left = Math.round(Math.random() * 35) * 10;
    const top = Math.round(Math.random() * 37) * 10;
    this.ele.style.left = left + 'px';
    this.ele.style.top = top + 'px';
  }
}
