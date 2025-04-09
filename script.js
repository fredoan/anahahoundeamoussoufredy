
// Fonction pour revenir à la page précédente
function goBack() {
  window.history.back();
}
// Apparition des éléments à l'accueil
document.addEventListener("DOMContentLoaded", () => {
  const accueilSection = document.querySelector('.accueil-section');
  accueilSection.style.opacity = 0;
  accueilSection.style.transform = 'translateY(50px)';
  setTimeout(() => {
    accueilSection.style.transition = 'all 1s ease';
    accueilSection.style.opacity = 1;
    accueilSection.style.transform = 'translateY(0)';
  }, 300);
});

// Effet hover sur les stickers
const stickers = document.querySelectorAll('.sticker');
stickers.forEach(sticker => {
  sticker.addEventListener('mouseenter', () => {
    sticker.style.transform = 'scale(1.1)';
    sticker.style.transition = 'transform 0.3s';
  });
  sticker.addEventListener('mouseleave', () => {
    sticker.style.transform = 'scale(1)';
  });
});

// Bouton retour en haut (optionnel)
const btnTop = document.createElement('button');
btnTop.textContent = '↑ Haut';
btnTop.style.position = 'fixed';
btnTop.style.bottom = '106px';
btnTop.style.right = '20px';
btnTop.style.padding = '10px 15px';
btnTop.style.backgroundColor = '#FFD700';
btnTop.style.border = 'none';
btnTop.style.borderRadius = '5px';
btnTop.style.cursor = 'pointer';
btnTop.style.display = 'none';
btnTop.style.zIndex = '999';

document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});