class Bullets {
  constructor(game) {
    this.game = game;
    this.x = this.game.player.x + this.game.player.width;
    this.y = this.game.player.y + this.game.player.height * 0.5;
    this.bulletAnimationFrames = [
      document.querySelector("#bullet1"),
      document.querySelector("#bullet2"),
      document.querySelector("#bullet3"),
      document.querySelector("#bullet4"),
      document.querySelector("#bullet5")
    ];
    this.activeImage = 0;

    this.fps = 10;
    this.imageInterval = 1000 / this.fps;
    this.imageTimer = 0;
  }
  update(deltaTime) {
    if (this.imageTimer > this.imageInterval) {
      this.activeImage < this.currentAnimationFrames.length - 1
        ? this.activeImage++
        : (this.activeImage = 0);

      this.imageTimer = 0;
    } else {
      this.imageTimer += deltaTime;
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