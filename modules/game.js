import { Background } from "./background.js";
import { Player } from "./player.js";

export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.background = new Background(this);
    this.player = new Player(this);
  }
  update(deltaTime) {
    this.player.update(deltaTime);
  }
  draw(context) {
    context.clearRect(0, 0, this.width, this.height);

    this.background.draw(context);
    this.player.draw(context);
  }
}