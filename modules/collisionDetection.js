export class CollisionDetection {
  constructor(game) {
    this.game = game;
  }
  isEnemyDead() {
    this.game.enemies.forEach(enemy => {
      this.game.bullets.forEach(bullet => {
        const bulletValues = {
          x: bullet.x,
          y: bullet.y,
          w: bullet.width,
          h: bullet.height
        }

        const enemyValues = enemy.collisionValues;
        if (
          bulletValues.x < enemyValues.x + enemyValues.w &&
          bulletValues.x + bulletValues.w > enemyValues.x &&
          bulletValues.y < enemyValues.y + enemyValues.h &&
          bulletValues.y + bulletValues.h > enemyValues.y
        ) {
          // Collision detected!
          this.game.addDestructionFireForEnemy(enemy);

          enemy.markedForDeletion = true;
          bullet.markedForDeletion = true;
          this.game.score += 10;
        } 
        // debugger;
      })
    })
    // console.log(bullet, enemy);

  }
  isPlayerDead() {
    this.game.enemies.map(enemy => {
      let player = this.game.player;

      const playerValues = {
        x: player.x + player.width * 0.1,
        y: player.y + player.height * 0.1,
        w: player.width - + player.width * 0.1,
        h: player.height - player.height * 0.2
      }
      
      // updating enemy collision box here
      const enemyValues = enemy.updateCollisionValues(enemy);

      if (
        playerValues.x < enemyValues.x + enemyValues.w &&
        playerValues.x + playerValues.w > enemyValues.x &&
        playerValues.y < enemyValues.y + enemyValues.h &&
        playerValues.y + playerValues.h > enemyValues.y
      ) {
        // Collision detected!

        this.game.addDestructionFireForEnemy(enemy);
        this.game.addDestructionFireForPlayer(this.game.player);
        
        this.game.gameMusic.pause();
        setTimeout(() => {
          this.game.gameOver = true;
        }, 100);

      } 

    })
  }
}