const modalWindow = document.querySelector('.modal--feedback')
const closeButton = document.getElementById('feedbackCloseButton')
const modalButtons = document.querySelectorAll('.service-btn--feedback')
const overlay = document.getElementById('feedbackOverlay')

function toggleModalWindow() {
  modalWindow.classList.toggle('modal--hide')
  overlay.classList.toggle('overlay--hide')
}

closeButton.onclick = toggleModalWindow
overlay.onclick = toggleModalWindow

for (i = 0; i < modalButtons.length; i++) {
  modalButtons[i].onclick = toggleModalWindow
}
