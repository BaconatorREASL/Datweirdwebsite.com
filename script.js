console.log("Dat Weird Website initialized.");

// Create audio element
const music = new Audio("music/theme.mp3");
music.loop = true;
music.muted = true; // start muted
music.play().catch(() => console.log("Autoplay blocked, starting muted."));

// Button to toggle mute/unmute
const toggleBtn = document.getElementById("toggleMusic");
toggleBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  toggleBtn.textContent = music.muted ? "🔇 Unmute Music" : "🔊 Mute Music";
});
