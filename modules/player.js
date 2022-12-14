export class Player {
  constructor(game) {
    this.game = game;
    this.flyingAnimationFrames = [
      document.querySelector("#fly1"),
      document.querySelector("#fly2"),
    ];
    this.shootingAnimationFrames = [
      document.querySelector("#shoot1"),
      document.querySelector("#shoot2"),
      document.querySelector("#shoot3"),
      document.querySelector("#shoot4"),
      document.querySelector("#shoot5"),
    ];
    this.deadAnimationFrames = [document.querySelector("#dead")];
    this.playerStates = {
      fly: "flyingAnimationFrames",
      shoot: "shootingAnimationFrames",
      dead: "deadAnimationFrames",
    };
    this.currentAnimationFrames = this[this.playerStates.fly];
    this.activeState = 0;
    this.activeImage = 0;
    this.imageWidth = 443;
    this.imageHeight = 302;
    this.width = this.imageWidth * 0.3;
    this.height = this.imageHeight * 0.3;

    this.fps = 10;
    this.imageInterval = 1000 / this.fps;
    this.imageTimer = 0;

    this.bps = 20;
    this.bulletInterval = 1000 / this.bps;
    this.bulletTimer = 0;

    this.x = 50;
    this.y = this.game.height / 2;
    this.vyModifier = 10;
    this.vxModifier = 10;

    this.collidingCircleRadius = this.width * 0.5 - this.width * 0.1;
  }
  update(deltaTime) {
    this.updateImageAnimation(deltaTime);
    this.verticalMovement();
    this.horizontalMovement();
    this.firingState(deltaTime);
  }
  draw(context) {
    /** @type {HTMLCanvasElement} */

    context.drawImage(
      this.currentAnimationFrames[this.activeImage],
      this.x,
      this.y,
      this.width,
      this.height
    );

    if(this.game.debug) {
      context.save();
      context.fillStyle = 'rgba(0,0,0, 0.4)';
      context.fillRect(
        this.x + this.width * 0.1,
        this.y + this.height * 0.1,
        this.width - + this.width * 0.1,
        this.height - this.height * 0.2
      )
      // context.beginPath();
      // context.arc(
      //   this.x + this.width * 0.5,
      //   this.y + this.height * 0.5,
      //   this.collidingCircleRadius,
      //   0,
      //   2 * Math.PI
      // );
      // context.stroke();
      context.restore();
    }
    
  }
  updateImageAnimation(deltaTime) {
    if (this.imageTimer > this.imageInterval) {
      this.activeImage < this.currentAnimationFrames.length - 1
        ? (this.activeImage += 1)
        : (this.activeImage = 0);

      this.imageTimer = 0;
    } else {
      this.imageTimer += deltaTime;
    }
  }
  verticalMovement() {
    const inputValue = this.game.input.keys;
    if (inputValue.includes("ArrowDown")) {
      this.y += this.vyModifier;
    } else if (inputValue.includes("ArrowUp")) {
      this.y -= this.vyModifier;
    }

    if (this.y < 10) {
      this.y = 10;
    } else if (this.y > this.game.height - this.height) {
      this.y = this.game.height - this.height;
    }
  }
  horizontalMovement() {
    const inputValue = this.game.input.keys;
    if (inputValue.includes("ArrowRight")) {
      this.x += this.vxModifier;
    } else if (inputValue.includes("ArrowLeft")) {
      this.x -= this.vxModifier;
    }

    if (this.x < 10) {
      this.x = 10;
    } else if (this.x > this.game.width - this.width) {
      this.x = this.game.width - this.width;
    }
  }
  firingState(deltaTime) {
    const inputValue = this.game.input.keys;
    if (inputValue.includes("F") || inputValue.includes("f")) {
      if (this.currentAnimationFrames !== this[this.playerStates.shoot]) {
        this.currentAnimationFrames = this[this.playerStates.shoot];
        this.activeImage = 0;
      }
      this.fireBullet(deltaTime);
    } else {
      if (this.currentAnimationFrames !== this[this.playerStates.fly]) {
        this.currentAnimationFrames = this[this.playerStates.fly];
        this.activeImage = 0;
      }
    }
  }
  fireBullet(deltaTime) {
    if (this.bulletTimer > this.bulletInterval) {
      this.game.updateBullets();

      this.bulletTimer = 0;
    } else {
      this.bulletTimer += deltaTime;
    }
  }
}
