export class Enemy {
  constructor(game) {
    this.game = game;
    this.image = document.querySelector("#enemy");
    this.width = 205;
    this.height = 160;
    this.sizeModifier = Math.random()  + 1;
    this.x = this.game.width;
    this.y = Math.random() * (this.game.height - (this.height * this.sizeModifier)) * 0.8;

    this.frameX = 0;
    this.frameY = 0;
    this.xFrameMax = 3;
    this.yFrameMax = 1;

    this.vx = 3;
    this.markedForDeletion = false;

    this.vy = Math.random() * 4 - 2;

    this.fps = 10;
    this.imageInterval = 1000 / this.fps;
    this.imageTimer = 0;

    this.collisionValues = {};

    this.motionChangeTimer = 0;
    this.motionChangeInterval = 1000;
  }
  update(deltaTime) {
    if(this.motionChangeTimer > this.motionChangeInterval) {
      this.vy = Math.random() * 6 - 3;
      this.vx = Math.random() * 2 + 2;

      this.motionChangeTimer = 0;
    } else {
      this.motionChangeTimer += deltaTime;
    }

    this.x -= this.vx * this.game.speed;
    this.y -= this.vy;

    if(this.y > this.game.height - (this.height * this.sizeModifier) || this.y < 0) {
      this.vy = -this.vy;
    } 

    if(this.x + this.width < 0) {
      this.markedForDeletion = true;
    }
    this.updateImageAnimation(deltaTime);


  }
  draw(context) {
    
    if(this.game.debug) {
      context.save();
      context.beginPath();
      context.fillStyle = "rgba(255, 0, 0, 0.9)";
      context.fillRect(
        this.x + this.width * this.sizeModifier * 0.2,
        this.y + this.height * this.sizeModifier * 0.4,
        this.width * this.sizeModifier - (this.width * this.sizeModifier * 0.3),
        this.height * this.sizeModifier - (this.height * this.sizeModifier * 0.7)
      )
      context.fill();
      context.restore();
    }

    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * this.sizeModifier,
      this.height * this.sizeModifier
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
  updateCollisionValues() {
    return this.collisionValues = {
      x: this.x + this.width * this.sizeModifier * 0.2,
      y: this.y + this.height * this.sizeModifier * 0.4,
      w: this.width * this.sizeModifier - (this.width * this.sizeModifier * 0.3),
      h: this.height * this.sizeModifier - (this.height * this.sizeModifier * 0.7)
    }
  }
}
