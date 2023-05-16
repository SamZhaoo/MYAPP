export class ScorePanel {
  _score: number;
  _level: number;
  constructor() {
    this._score = 0;
    this._level = 1;
  }
  get score() {
    return this._score;
  }
  set score(val: number) {
    this._score = val;
  }
  get level() {
    return this._level;
  }
  set level(val: number) {
    this._level = val;
  }
}
