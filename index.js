import { Game } from './modules/game.js';

window.addEventListener('load', () => {
  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;
  
  
  function animate(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.update(deltaTime);
    game.draw(ctx);
    // ctx.drawImage(image1, 30, 30, 44.3 * 5, 30.2 * 5); 
    requestAnimationFrame(animate);
  }
  
  animate(lastTime);
})

