export class Enemy {
  constructor(game) {
    this.game = game;
    this.image = document.querySelector("#enemy");
    this.x = this.game.width;
    this.y = Math.random() * this.game.height * 0.8;
    this.width = 205;
    this.height = 160;

    this.frameX = 0;
    this.frameY = 0;
    this.xFrameMax = 3;
    this.yFrameMax = 1;

    this.vx = 3;
    this.markedForDeletion = false;

    this.fps = 10;
    this.imageInterval = 1000 / this.fps;
    this.imageTimer = 0;
  }
  update(deltaTime) {
    this.x -= this.vx * this.game.speed;

    if(this.x + this.width < 0) {
      this.markedForDeletion = true;
    }
    this.updateImageAnimation(deltaTime);


  }
  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  updateImageAnimation(deltaTime) {
    if (this.imageTimer > this.imageInterval) {
      if(this.frameX < this.xFrameMax) {
        this.frameX += 1
      } else {
        if(this.frameY < this.yFrameMax) {
          this.frameY += 1;
        } else {
          this.frameY = 0;
        }
        this.frameX = 0;
      }
      
      this.imageTimer = 0;
    } else {
      this.imageTimer += deltaTime;
    }
  }
}
