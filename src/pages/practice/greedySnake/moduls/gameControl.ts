import { Food } from './Food';
import { Snake } from './Snake';
import { ScorePanel } from './ScorePanel';
export class gameControl {
  food: Food;
  snake: Snake;
  scorePanel: ScorePanel;
  diretion: string = 'ArrowRight';
  isAlive: boolean = true;
  constructor(foodDom: HTMLElement, snakeDom: HTMLElement) {
    this.food = new Food(foodDom);
    this.snake = new Snake(snakeDom);
    this.scorePanel = new ScorePanel();
    this.init();
  }
  init() {
    window.addEventListener('keydown', this.onKeyDown.bind(this)); // 添加全局事件
  }
  onKeyDown(o: KeyboardEvent) {
    this.diretion = o.key;
    this.run();
  }
  run() {
    let x = this.snake.X;
    let y = this.snake.Y;
    switch (this.diretion) {
      case 'ArrowRight':
        x += 4;
        break;
      case 'ArrowUp':
        y -= 4;
        break;
      case 'ArrowLeft':
        x -= 4;
        break;
      case 'ArrowDown':
        y += 4;
        break;
      default:
        break;
    }
    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch (error) {
      alert(`${error},Game Over!!!`);
      this.isAlive = false;
    }
    this.checkEat();
    // this.isAlive && setTimeout(this.run.bind(this), 300);
  }
  checkEat() {
    const { X: sx, Y: sy } = this.snake;
    const { X: fx, Y: fy } = this.food;
    if (sx === fx && sy === fy) {
      this.snake.addBody();
      this.food.changePosition();
      this.scorePanel.addScore();
    }
  }
}
