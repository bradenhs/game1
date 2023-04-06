
import type { Dimensions } from "zilch-game-engine";
import type { Config } from "./config";
import type { State } from "./state";

export class Renderer {
  constructor(canvas: HTMLCanvasElement, config: Config) {}
  render(state: State, dimensions: Dimensions) {}
}
