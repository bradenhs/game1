import type { RenderParams } from "zilch-game-engine";
import type { State } from "./state";
import type { Config } from "./config";

export class Renderer {
  container: HTMLPreElement;

  constructor(canvas: HTMLCanvasElement) {
    this.container = document.createElement("pre");
    this.container.style.position = "absolute";
    this.container.style.display = "flex";
    this.container.style.alignItems = "center";
    this.container.style.justifyContent = "center";
    this.container.style.fontFamily = "monospace";
    document.body.appendChild(this.container);
  }
  render(params: RenderParams<State, Config>) {
    this.container.innerText = JSON.stringify(params, null, 2);
  }
}
