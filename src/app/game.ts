import { Board } from "./board";

export class Game {
  board: Board;
  player: number = 0;

  constructor() {
    this.board = new Board();
    this.board.onClick(this.pickSquare.bind(this));
  }

  pickSquare(x: number, y: number, val: string) {
    if (!val) {
      this.board.setCell(x, y, this.player === 0 ? 'X' : 'O');
      this.player = (this.player + 1) % 2;
    }
  }
}