const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

// initial Y coordinate position
let y = 100;

const height = 100;
let bottom = y + 100;
function animate() {
  window.requestAnimationFrame(animate);
  // draw canvas background
  c.fillStyle = "#fff";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // draw the rectangle and move its Y coordinate
  c.fillStyle = "#F00";
  c.fillRect(100, y, 100, 100);

  if (bottom < canvas.height) {
    y++;
    bottom = y + 100;
  }
}

animate();
