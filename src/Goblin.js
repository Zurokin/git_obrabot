export default class Goblin {
  constructor(game) {
    this.game = game;
    this.currentCell = null;
  }

  move() {
    if (this.currentCell) {
      this.currentCell.classList.remove("goblin");
      this.game.incrementMissed();
    }

    const randomIndex = Math.floor(Math.random() * 16);
    this.currentCell = this.game.cells[randomIndex];
    this.currentCell.classList.add("goblin");
  }

  hide() {
    if (this.currentCell) {
      this.currentCell.classList.remove("goblin");
      this.currentCell = null;
    }
  }
}
