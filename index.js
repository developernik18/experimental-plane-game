import { Game } from './modules/game.js';

window.addEventListener('load', () => {
  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let game = new Game(canvas.width, canvas.height);
  let lastTime = 0;
  
  
  function animate(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.update(deltaTime);
    game.draw(ctx);

    if(game.gameOver) {

    } else {
      requestAnimationFrame(animate);
    }
  }
  
  animate(lastTime);
})

