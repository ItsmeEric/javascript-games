const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 100;
    this.height = 100;
    this.sides = {
      bottom: this.position.y + this.height,
    };
  }
  draw() {
    // draw the rectangle and move its Y coordinate
    c.fillStyle = "#F00";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    if (this.sides.bottom < canvas.height) {
      this.position.y++;
      this.sides.bottom = this.position.y + this.height;
    }
  }
}

const player = new Player();

function animate() {
  window.requestAnimationFrame(animate);
  // draw canvas background
  c.fillStyle = "#fff";
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.draw();
  player.update();
}

animate();
