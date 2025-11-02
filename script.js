console.log("Dat Weird Website initialized.");

// Music
const music = new Audio("music/theme.mp3");
music.loop = true;

document.getElementById("playMusic").addEventListener("click", () => {
  music.play();
  document.getElementById("playMusic").style.display = "none";
});

// Seamless checkers board
const board = document.getElementById("checkersBoard");

// 2 sets of 8x8 to loop smoothly
for (let repeat = 0; repeat < 2; repeat++) {
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    board.appendChild(square);
  }
}

// Start animation
board.classList.add("animate");
