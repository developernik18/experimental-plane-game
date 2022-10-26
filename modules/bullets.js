export class Bullets {
  constructor(game) {
    this.game = game;
    this.x = this.game.player.x + this.game.player.width;
    this.y = this.game.player.y + this.game.player.height * 0.5;
    this.width = 100;
    this.height = 100;

    this.bulletAnimationFrames = [
      document.querySelector("#bullet1"),
      document.querySelector("#bullet2"),
      document.querySelector("#bullet3"),
      document.querySelector("#bullet4"),
      document.querySelector("#bullet5")
    ];
    this.activeImage = 0;

    this.fps = 300;
    this.imageInterval = 1000 / this.fps;
    this.imageTimer = 0;

    this.bulletSpeed = 6;
    this.markedForDeletion = false;
  }
  update(deltaTime) {
    if (this.imageTimer > this.imageInterval) {
      this.activeImage < this.bulletAnimationFrames.length - 1
      ? this.activeImage++
      : (this.activeImage = 0);

      this.imageTimer = 0;
    } else {
      this.imageTimer += deltaTime;
    }

    this.x += this.bulletSpeed * this.game.speed;
      
    if(this.x > this.game.width) {
      this.markedForDeletion = true;
    }
  }
  draw(context) {
    context.drawImage(
      this.bulletAnimationFrames[this.activeImage],
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}