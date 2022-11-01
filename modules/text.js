export class Text {
  constructor(game) {
    this.game = game;
  }
  draw(context) {
    context.save();
    context.font = "30px Arial";
    context.fillStyle = "rgb(0, 0, 0)";
    context.fillText(`Score: ${this.game.score}`, 40, 60, 200);

    context.fillStyle = "rgb(255, 165, 0)";
    context.fillText(`Bullets: ${this.game.maxBullets}`, 38, 98, 200);

    context.fillStyle = "rgb(165, 0, 0)";
    context.fillText(`Bullets: ${this.game.maxBullets}`, 40, 100, 200);
    context.restore();
  }
  gameOverScreen(context, victory) {
    context.save();
    context.fillStyle = "rgba(255, 255, 255, 0.4)";
    this.createRoundedRectangle(context);

    context.textAlign = "center";
    context.fillStyle = "rgb(255, 0, 0)";

    if (victory) {
      this.victoryText(context);
    } else {
      this.lossText(context);
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
  victoryText(context) {
    context.font = "60px Arial";
    context.fillText(
      `Victory !!!`,
      this.game.width * 0.5,
      this.game.height * 0.5 - 60,
      this.game.width * 0.5 - 40
    );

    context.font = "20px Arial";
    context.fillText(
      `Good Job ${this.game.reachedRank}, You killed ${
        this.game.enemyKilled
      } dragons`,
      this.game.width * 0.5,
      this.game.height * 0.5,
      this.game.width * 0.5 - 40
    );

    context.font = "40px Arial";
    context.fillText(
      `Scored ${this.game.score} points`,
      this.game.width * 0.5,
      this.game.height * 0.5 + 60,
      this.game.width * 0.5 - 40
    );
  }
  lossText(context) {
    context.font = "20px Arial";
    context.fillText(
      `Dead before dragons.`,
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

    context.font = "20px Arial";
    context.fillText(
      `${this.game.reachedRank}, Try to become better in next life`,
      this.game.width * 0.5,
      this.game.height * 0.5 + 60,
      this.game.width * 0.5 - 40
    );
  }
}
