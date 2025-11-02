/console.log("Dat Weird Website initialized!");

// Music setup
const music = new Audio("music/theme.mp3");
music.loop = true;

document.getElementById("playMusic").addEventListener("click", () => {
  music.play();
  document.getElementById("playMusic").style.display = "none";
});

// Checkers setup
const board = document.getElementById("checkersBoard");

// Create 2 sets of 8x8 squares for seamless scrolling
for (let repeat = 0; repeat < 2; repeat++) {
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    board.appendChild(square);
  }
}

// Start animation after a short delay (to ensure layout is ready)
setTimeout(() => {
  board.classList.add("animate");
}, 200);
