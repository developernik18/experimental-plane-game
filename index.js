import { Game } from './modules/game.js';

window.addEventListener('load', () => {
  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = document.querySelector('#canvas');
  const playGame = document.querySelector('#playGame');

  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let game = new Game(canvas.width, canvas.height);
  let gameOn = false;
  let lastTime = 0;
  
  
  function animate(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.update(deltaTime);
    game.draw(ctx);

    if(game.gameOver) {

    } else {
      if(gameOn) {
        requestAnimationFrame(animate);
      } else {
        gameOn = true;
      }
    }
  }
  
  playGame.addEventListener('click', () => {
    gameOn = true;
    animate(lastTime);
    document.querySelector('#menu').style.display = "none";

    if(!game.gameOver) {
      game.gameMusic.play();
    }
  });


  animate(lastTime);
})

