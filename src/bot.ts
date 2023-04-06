
import type { BotConfig } from "zilch-game-engine";
import type { Config } from "./config";

export class Bot {
  type: "practice" | "boss";
  config: BotConfig<Config>;

  constructor(type: "practice" | "boss", config: BotConfig<Config>) {
    this.type = type;
    this.config = config;
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
