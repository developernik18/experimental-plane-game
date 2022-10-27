export class CollisionDetection {
  constructor(game) {
    this.game = game;
  }
  isEnemyDead(bullet, enemy) {
    // console.log(bullet, enemy);
  }
  isPlayerDead() {
    this.game.enemies.map(enemy => {
      let player = this.game.player;

      // const dx = (player.x + player.width * 0.5) - (enemy.x + enemy.width * enemy.sizeModifier * 0.5);
      // const dy = (player.y + player.height * 0.5) - (enemy.y + enemy.height * enemy.sizeModifier * 0.5);
      // const distance = Math.sqrt(dx * dx + dy * dy);

      // const colliding = distance < player.collidingCircleRadius + enemy.collidingCircleRadius;
      const playerValues = {
        x: player.x + player.width * 0.1,
        y: player.y + player.height * 0.1,
        w: player.width - + player.width * 0.1,
        h: player.height - player.height * 0.2
      }
      
      const enemyValues = {
        x: enemy.x + enemy.width * enemy.sizeModifier * 0.2,
        y: enemy.y + enemy.height * enemy.sizeModifier * 0.4,
        w: enemy.width * enemy.sizeModifier - (enemy.width * enemy.sizeModifier * 0.3),
        h: enemy.height * enemy.sizeModifier - (enemy.height * enemy.sizeModifier * 0.7)
      }

      if (
        playerValues.x < enemyValues.x + enemyValues.w &&
        playerValues.x + playerValues.w > enemyValues.x &&
        playerValues.y < enemyValues.y + enemyValues.h &&
        playerValues.y + playerValues.h > enemyValues.y
      ) {
        // Collision detected!
        this.game.gameOver = true;
      } 

    })
  }
}