export class ScorePanel {
  score: number;
  level: number;
  constructor() {
    this.score = 0;
    this.level = 1;
  }
  addScore() {
    this.score++;
    if (Math.floor(this.score / 10) + 1 > 1) {
      throw new Error('满级了');
    } else {
      this.level = Math.floor(this.score / 10) + 1;
    }
  }
}
