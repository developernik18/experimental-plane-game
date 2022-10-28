export class Text {
  constructor(game) {
    this.game = game;
  }
  draw(context) {
    context.font = "30px Arial";
    context.fillText(`Score: ${this.game.score}`, 40, 60, 200);
  }
  gameOverScreen(context) {
    context.save();
    context.fillStyle = "rgba(255, 0, 0, 0.97)";
    this.createRoundedRectangle(context);
    
    context.textAlign ="center";
    context.fillStyle = "rgb(255, 255, 255)";

    if(this.game.score > 200) {
      context.font = "20px Arial";
      context.fillText(
        `Yahoo, You have killed ${this.game.score / 10} dragons`,
        this.game.width * 0.5,
        this.game.height * 0.5 - 60,
        this.game.width * 0.5 - 40
      );

      context.font = "40px Arial";
      context.fillText(
        `Scored ${this.game.score} points`,
        this.game.width * 0.5,
        this.game.height * 0.5,
        this.game.width * 0.5 - 40
      );
    } else {

      context.font = "20px Arial";
      context.fillText(
        `Not enough dragon killed`,
        this.game.width * 0.5,
        this.game.height * 0.5 - 60,
        this.game.width * 0.5 - 40
      ); 

      context.font = "40px Arial";
      context.fillText(
        `You lose !!!`,
        this.game.width * 0.5,
        this.game.height * 0.5,
        this.game.width * 0.5 - 40
      ); 
    }

    context.restore();
  }
  createRoundedRectangle(context) {
    const box = {
      x: this.game.width * 0.25,
      y: this.game.height * 0.25,
      w: this.game.width * 0.5,
      h: this.game.height * 0.5,
      r: 10,
    };
    context.beginPath();
    context.moveTo(box.x, box.y);
    context.lineTo(box.x + box.w, box.y);
    context.quadraticCurveTo(
      box.x + box.w + box.r,
      box.y,
      box.x + box.w + box.r,
      box.y + box.r
    );
    context.lineTo(box.x + box.w + box.r, box.y + box.h);
    context.quadraticCurveTo(
      box.x + box.w + box.r,
      box.y + box.h + box.r,
      box.x + box.w,
      box.y + box.h + box.r
    );

    context.lineTo(box.x + box.r, box.y + box.h + box.r);

    context.quadraticCurveTo(
      box.x,
      box.y + box.h + box.r,
      box.x,
      box.y + box.h
    );
    context.lineTo(box.x, box.y + box.r);
    context.quadraticCurveTo(box.x, box.y, box.x + box.r, box.y);
    context.fill();
  }
}
