import type { CreateBotParams } from "zilch-game-engine";

export class Bot {
  params: CreateBotParams;

  constructor(params: CreateBotParams) {
    this.params = params;
  }

  move(payload: string): string {
    const board = payload.split("|").map((row) => row.split(","));

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (board[x][y] === "empty") {
          return `${x},${y}`;
        }
      }
    }

    return "0,0";
  }
}
