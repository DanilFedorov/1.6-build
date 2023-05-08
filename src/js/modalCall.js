const modalWindow = document.querySelector('.modal--call')
const closeButton = document.getElementById('callCloseButton')
const modalButtons = document.querySelectorAll('.service-btn--call')
const overlay = document.getElementById('callOverlay')

function toggleModalWindow() {
  modalWindow.classList.toggle('modal--hide')
  overlay.classList.toggle('overlay--hide')
}

closeButton.onclick = toggleModalWindow
overlay.onclick = toggleModalWindow

for (i = 0; i < modalButtons.length; i++) {
  modalButtons[i].onclick = toggleModalWindow
}
