export default class Score {
  constructor() {
    this.score = 0;
    this.scoreElement = document.getElementById("score");
  }

  increment() {
    this.score++;
    this.scoreElement.textContent = this.score;
  }
}
