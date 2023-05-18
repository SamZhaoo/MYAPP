import { Food } from './Food';
import { Snake } from './Snake';
import { ScorePanel } from './ScorePanel';
import { notification } from 'antd';
// 互斥的方向
enum isRepel {
  ArrowRight = 'ArrowLeft',
  ArrowLeft = 'ArrowRight',
  ArrowUp = 'ArrowDown',
  ArrowDown = 'ArrowUp',
}
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
    this.run();
  }
  init() {
    window.addEventListener('keydown', this.onKeyDown.bind(this)); // 添加全局事件
  }
  onKeyDown(o: KeyboardEvent) {
    if (this.diretion !== isRepel[o.key as keyof typeof isRepel]) {
      this.diretion = o.key;
    }
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
      this.snake.moveBody();
      this.snake.X = x;
      this.snake.Y = y;
    } catch (error: any) {
      this.isAlive = false;
      notification.error({
        message: 'GAME OVER!!!',
        description: error.message,
      });
    }
    this.checkEat();
    const speed = 300 - (this.scorePanel.level - 1) * 30;
    this.isAlive && setTimeout(this.run.bind(this), speed);
  }
  checkEat() {
    const { X: sx, Y: sy } = this.snake;
    const { X: fx, Y: fy } = this.food;
    if (sx === fx && sy === fy) {
      this.snake.addBody();
      this.food.changePosition();
      try {
        this.scorePanel.addScore();
      } catch (error: any) {
        notification.success({
          message: 'congratulations!!!',
          description: error.message,
        });
      }
    }
  }
}
