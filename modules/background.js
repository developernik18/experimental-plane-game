export class Background {
  constructor(game) {
    this.game = game;
    this.bg = document.querySelector("#bg");
    this.x = 0;
    this.y = 0;
    // this.width = 1460;
    this.width = this.game.width;
    // this.height = 1095;
    this.height = this.game.height;

    this.fps = 100;
    this.imageInterval = 1000 / this.fps;
    this.imageTimer = 0;

    this.bgSpeed = 4;


  }
  update(deltaTime) {
    if(this.imageTimer > this.imageInterval) {
      this.x -= this.bgSpeed * this.game.speed;
      if(this.x + this.width < 10) {
        this.x = 0;
      }

      this.imageTimer = 0;
    } else {
      this.imageTimer += deltaTime;
    }

  }
  draw(context) {
    
    context.drawImage(
      this.bg,
      this.x,
      this.y,
      this.width,
      this.height
    );
    context.drawImage(
      this.bg,
      this.x + this.width - 10,
      this.y,
      this.width,
      this.height
    );
  }
}
