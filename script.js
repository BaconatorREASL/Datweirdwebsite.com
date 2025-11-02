/// Music setup
const music = new Audio("music/theme.mp3");
music.loop = true;

document.getElementById("playMusic").addEventListener("click", () => {
  music.play()
    .then(() => console.log("Music started"))
    .catch(err => console.log("Music failed:", err));
});

// Checkers board setup
const board = document.getElementById("checkersBoard");

for (let repeat = 0; repeat < 2; repeat++) {
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    board.appendChild(square);
  }
}

setTimeout(() => board.classList.add("animate"), 200);
