const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

const player = new Player();

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);
  // draw canvas background
  c.fillStyle = "#fff";
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.velocity.x = 0;
  if (keys.a.pressed) player.velocity.x = -5;
  else if (keys.d.pressed) player.velocity.x = 5;

  player.draw();
  player.update();
}

animate();
