export class Player {
  constructor(game) {
    this.game = game;
    this.playerStates = ["flying", "shooting", "dead"];
    this.flyingAnimationFrames = [
      document.querySelector("#fly1"),
      document.querySelector("#fly2"),
    ];
    this.currentAnimationFrames = this.flyingAnimationFrames;
    this.activeState = 0;
    this.activeImage = 0;
    this.maxImage = 1;
    this.imageWidth = 443;
    this.imageHeight = 302;

    this.fps = 10;
    this.imageInterval = 1000 / this.fps;
    this.imageTimer = 0;
  }
  update(deltaTime) {
    if(this.imageTimer > this.imageInterval) {
      this.activeImage < this.maxImage ? this.activeImage++ : this.activeImage = 0;

      this.imageTimer = 0;
    } else {
      this.imageTimer += deltaTime;
    }
  }
  draw(context) {
    context.drawImage(
      this.currentAnimationFrames[this.activeImage],
      50,
      this.game.height / 2,
      this.imageWidth * 0.5,
      this.imageHeight * 0.5
    );
  }
}
