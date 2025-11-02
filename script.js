console.log("Dat Weird Website initialized.");

// Create music element
const music = new Audio("music/theme.mp3");
music.loop = true;

// Play music on button click
document.getElementById("playMusic").addEventListener("click", () => {
  music.play();
  document.getElementById("playMusic").style.display = "none"; // hide button after clicked
});
