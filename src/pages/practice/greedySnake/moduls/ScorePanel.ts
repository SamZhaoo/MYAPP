export class ScorePanel {
  score: number;
  level: number;
  constructor() {
    this.score = 0;
    this.level = 1;
  }
  addScore() {
    this.score++;
    this.level = Math.floor(this.score / 10) + 1;
  }
}
