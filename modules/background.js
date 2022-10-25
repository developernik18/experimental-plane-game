export class Background {
  constructor(game) {
    this.game = game;
    this.bg = document.querySelector('#bg');
  }
  draw(context) {
    context.drawImage(this.bg, 0, 0, this.game.width, this.game.height); 
  }
}