console.log("Dat Weird Website initialized.");

const music = new Audio("music/theme.mp3");
music.loop = true;

document.getElementById("playMusic").addEventListener("click", () => {
  music.play();
  document.getElementById("playMusic").style.display = "none"; // hide button
});
