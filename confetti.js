// Animation de confettis pour toutes les pages
function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
  confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
  confetti.style.opacity = 0.7 + Math.random() * 0.3;
  confetti.style.transform = `rotate(${Math.random()*360}deg)`;
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    setTimeout(createConfettiPiece, i * 80);
  }
}

document.addEventListener('DOMContentLoaded', launchConfetti);
