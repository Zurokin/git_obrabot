import Goblin from "./Goblin.js";
import Score from "./Score.js";

export default class Game {
  constructor() {
    this.field = document.querySelector(".game-field");
    this.cells = [];
    this.goblin = new Goblin(this);
    this.score = new Score();
    this.missed = 0;
    this.init();
  }

  init() {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
      this.field.appendChild(cell);
      this.cells.push(cell);
    }

    this.cells.forEach((cell) => {
      cell.addEventListener("click", (e) => this.handleClick(e));
    });

    this.start();
  }

  start() {
    this.interval = setInterval(() => this.goblin.move(), 1000);
  }

  handleClick(event) {
    if (event.target.classList.contains("goblin")) {
      this.score.increment();
      this.goblin.hide();
    }
  }

  incrementMissed() {
    this.missed++;
    document.getElementById("misses").textContent = this.missed;
    if (this.missed >= 5) {
      clearInterval(this.interval);
      alert("Игра окончена! Вы пропустили 5 раз.");
      window.location.reload();
    }
  }
}
