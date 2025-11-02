// Music
const music = new Audio("music/theme.mp3");
music.loop = true;

document.getElementById("playMusic").addEventListener("click", () => {
  music.play();
  document.getElementById("playMusic").style.display = "none";
});

// Checkers board generator
const board = document.getElementById("checkersBoard");

// Create 2 sets of 8x8 so it loops smoothly
for (let repeat = 0; repeat < 2; repeat++) {
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    board.appendChild(square);
  }
}

// Start animation after a slight delay (lets it render)
setTimeout(() => board.classList.add("animate"), 200);
