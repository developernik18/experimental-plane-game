import { Game } from './modules/game.js';

window.addEventListener('load', () => {
  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = document.querySelector('#canvas');
  const playGameBtn = document.querySelector('#playGame');
  const musicBtn = document.querySelector('#music');
  const soundBtn = document.querySelector('#sound');

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
        game.shouldMusicContinue();
        requestAnimationFrame(animate);
      } else {
        gameOn = true;
      }
    }
  }
  
  playGameBtn.addEventListener('click', () => {
    gameOn = true;
    animate(lastTime);
    document.querySelector('#menu').style.display = "none";

    if(!game.gameOver) {
      if(game.playMusic) {
        game.gameMusic.play();
      } 
    }
  });

  musicBtn.addEventListener('click', () => {
    if(!game.gameOver) {
      game.playMusic = !game.playMusic;
    }
  });

  soundBtn.addEventListener('click', () => {
    if(!game.gameOver) {
      game.playOtherSounds = !game.playOtherSounds;
    }
  });


  animate(lastTime);
})

