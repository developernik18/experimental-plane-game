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


  }
  update() {
    this.x -= 5;
    if(this.x + this.width < 10) {
      this.x = 0;
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
