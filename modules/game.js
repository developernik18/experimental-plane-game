import { Background } from "./background.js";
import { Bullets } from "./bullets.js";
import { Enemy } from "./enemy.js";
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
  
    this.bullets = [];
    this.enemies = [];

    this.efps = 1;
    this.enemyEntryTimer = 0;
    this.enemyEntryInterval = 1000 / this.efps;
  }
  update(deltaTime) {
    this.background.update(deltaTime);
    this.player.update(deltaTime);
    this.bullets.forEach(bullet => {
      bullet.update(deltaTime);
    })
    this.bullets = this.bullets.filter(bullet => !bullet.markedForDeletion);

    this.enemies.forEach(enemy => {
      enemy.update(deltaTime);
    })

    this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);


    // For schedule enemy entry;

    if(this.enemyEntryTimer > this.enemyEntryInterval) {
      this.enemyEntryInterval = Math.random() * 2000;

      this.addNewEnemies();
      console.log(this.enemies);
      this.enemyEntryTimer = 0;
    } else {
      this.enemyEntryTimer += deltaTime;
    }

  }
  draw(context) {
    context.clearRect(0, 0, this.width, this.height);

    this.background.draw(context);
    this.player.draw(context);
    this.bullets.forEach(bullet => {
      bullet.draw(context);
    })

    this.enemies.forEach(enemy => {
      enemy.draw(context);
    })
  }
  updateBullets() {
    this.bullets.push(new Bullets(this));
  }
  addNewEnemies() {
    this.enemies.push(new Enemy(this));
  }
}