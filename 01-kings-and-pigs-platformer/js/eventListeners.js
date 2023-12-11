// Player Movement
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    // move player up
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -20;
      break;
    // move player to the left
    case "a":
      keys.a.pressed = true;
      break;
    // move player down
    case "s":
      if (player.velocity.y === 0) player.velocity.y = +20;
      break;
    // move player to the right
    case "d":
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    // move player to the left
    case "a":
      keys.a.pressed = false;
      break;
    // move player to the right
    case "d":
      keys.d.pressed = false;
      break;
  }
});
