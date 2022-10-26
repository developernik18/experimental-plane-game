import { Background } from "./background.js";
import { Bullets } from "./bullets.js";
import { InputHandler } from "./input.js";
import { Player } from "./player.js";

export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.background = new Background(this);
    this.input = new InputHandler(this);
    this.player = new Player(this);

    this.speed = 3;
    this.speedModifier = 2;
  
    this.bullets = [];
  }
  update(deltaTime) {
    this.background.update(deltaTime);
    this.player.update(deltaTime);
    this.bullets.forEach(bullet => {
      bullet.update(deltaTime);
    })
    this.bullets = this.bullets.filter(bullet => !bullet.markedForDeletion);

  }
  draw(context) {
    context.clearRect(0, 0, this.width, this.height);

    this.background.draw(context);
    this.player.draw(context);
    this.bullets.forEach(bullet => {
      bullet.draw(context);
    })
  }
  updateBullets() {
    this.bullets.push(new Bullets(this));
  }
}