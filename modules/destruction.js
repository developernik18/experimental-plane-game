export class Destruction {
  constructor(game, objectInfo) {
    this.game = game;
    this.x = objectInfo.x;
    this.y = objectInfo.y;
    this.w = objectInfo.width;
    this.h = objectInfo.height;
    this.image = document.querySelector("#fire");

    this.frame = 0;
    this.maxFrame = 10;

    this.frameWidth = 200;
    this.frameHeight = 190;

    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;

    this.destructionMusic = new Audio();
    this.destructionMusic.src = '../assets/sound/explosion/DeathFlash.flac';
    this.destructionMusic.play();

    this.markedForDeletion = false;
  }
  update(deltaTime) {
    this.x -= this.game.speed;

    if (this.frameTimer > this.frameInterval) {
      this.frame++;
      if (this.maxFrame < this.frame) {
        this.markedForDeletion = true;
      }

      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.frame * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
}


export class EnemyDestruction extends Destruction {
  constructor(game, enemyInfo) {
    super(game, enemyInfo);
    this.w = enemyInfo.width * enemyInfo.sizeModifier;
    this.h = enemyInfo.height * enemyInfo.sizeModifier;
  }
}