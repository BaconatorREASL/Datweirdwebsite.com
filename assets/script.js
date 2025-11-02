console.log("Dat Weird Website initialized.");

// ===== Character modal logic =====
const characters = {
  character1: {
    name: "Character 1",
    description: "This one’s weird in all the right ways.",
    main: "assets/images/characters/character1/main.png",
    extras: [
      "assets/images/characters/character1/extra1.png",
      "assets/images/characters/character1/extra2.png"
    ]
  },
  character2: {
    name: "Character 2",
    description: "Weirder. Louder. Possibly cursed.",
    main: "assets/images/characters/character2/main.png",
    extras: [
      "assets/images/characters/character2/extra1.png",
      "assets/images/characters/character2/extra2.png"
    ]
  }
};

// Modal elements
const modal = document.getElementById('character-modal');
const modalName = document.getElementById('modal-name');
const modalMain = document.getElementById('modal-main-img');
const modalExtras = document.getElementById('modal-extra-images');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.getElementById('modal-close');

// Attach modal to all character cards
document.querySelectorAll('.character-card').forEach(card => {
  card.addEventListener('click', () => {
    const charKey = card.getAttribute('data-character');
    const charData = characters[charKey];
    modalName.textContent = charData.name;
    modalMain.src = charData.main;
    modalDescription.textContent = charData.description;
    modalExtras.innerHTML = '';
    charData.extras.forEach(img => {
      const extraImg = document.createElement('img');
      extraImg.src = img;
      modalExtras.appendChild(extraImg);
    });
    modal.style.display = 'flex';
  });
});

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target == modal) modal.style.display='none'; }

// ===== Music Mute Button =====
const music = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');
if(muteBtn && music) {
  muteBtn.addEventListener('click', () => {
    music.muted = !music.muted;
    muteBtn.textContent = music.muted ? "Unmute Music" : "Mute Music";
  });
}

});
