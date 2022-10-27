export class Bullets {
  constructor(game) {
    this.game = game;
    this.x = this.game.player.x + this.game.player.width * 0.6;
    this.y = this.game.player.y + this.game.player.height * 0.4;
    this.width = 60;
    this.height = 60;
    

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
  
    context.save();
    context.beginPath();
    context.fillStyle = "orange";
    context.arc(
      this.x + this.width * 0.5,
      this.y + this.height * 0.5,
      this.width * 0.5 - this.width * 0.1,
      0,
      2 * Math.PI
    );
    context.closePath();
    context.fill();
    context.restore();
    
    context.drawImage(
      this.bulletAnimationFrames[this.activeImage],
      this.x,
      this.y,
      this.width,
      this.height
    );
    

    
  }
}