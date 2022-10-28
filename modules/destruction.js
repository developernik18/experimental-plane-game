export class Destruction {
  constructor(game, enemyInfo) {
    this.game = game;
    this.x = enemyInfo.x;
    this.y = enemyInfo.y;
    this.w = enemyInfo.width * enemyInfo.sizeModifier;
    this.h = enemyInfo.height * enemyInfo.sizeModifier;
    this.image = document.querySelector("#fire");

    this.frame = 0;
    this.maxFrame = 10;

    this.frameWidth = 200;
    this.frameHeight = 190;

    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;

    this.markedForDeletion = false;
  }
  update(deltaTime) {
    this.x -= this.game.speed;

    if (this.frameTimer > this.frameInterval) {
      this.frame++;
      if (this.maxFrame < this.frame) {
        this.markedForDeletion = true;
      }

      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.frame * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
}
