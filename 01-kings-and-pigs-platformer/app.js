const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/backgroundLevel1.png",
});

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
  backgroundLevel1.draw();
  player.velocity.x = 0;
  if (keys.a.pressed) player.velocity.x = -5;
  else if (keys.d.pressed) player.velocity.x = 5;

  player.draw();
  player.update();
}

animate();
