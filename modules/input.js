export class InputHandler {
  constructor(game) {
    this.game = game;
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === "f" ||
          e.key === "F" ||
          e.key === "d") &&
        !this.keys.includes(e.key)
      ) {
        this.keys.push(e.key);
      }
    });

    window.addEventListener("keyup", (e) => {
      if (
        (e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === "f" ||
          e.key === "F" ||
          e.key === "d") &&
        this.keys.includes(e.key)
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}
