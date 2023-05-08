const aside = document.querySelector('.menu')
const asideButton = document.getElementById('menuCloseButton')
const headerButton = document.querySelector('.service-btn--menu')
const overlay = document.getElementById('menuOverlay')

function toggleMenu() {
  aside.classList.toggle('menu--hide')
  overlay.classList.toggle('overlay--hide')
}

asideButton.onclick = toggleMenu
headerButton.onclick = toggleMenu
overlay.onclick = toggleMenu
