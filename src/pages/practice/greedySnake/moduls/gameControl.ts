import { Food } from './Food';
import { Snake } from './Snake';
export class gameControl {
  food: Food;
  snake: Snake;
  constructor(foodDom: HTMLElement, snakeDom: HTMLElement) {
    this.food = new Food(foodDom);
    this.snake = new Snake(snakeDom);
  }
  init() {
    window.addEventListener('keydown', this.onKeyDown.bind(this)); // 添加全局事件
  }
  onKeyDown(o: KeyboardEvent) {
    console.log(o);
  }
}
