function toggleModalWindow(
  modalWindow,
  closeButton,
  modalButtons,
  overlay,
  body
) {
  function toggle() {
    modalWindow.classList.toggle('modal--hide')
    overlay.classList.toggle('overlay--hide')
    body.classList.toggle('body-modal')
  }

  closeButton.onclick = toggle
  overlay.onclick = toggle

  for (let i = 0; i < modalButtons.length; i++) {
    modalButtons[i].onclick = toggle
  }
}

const callModalWindow = document.querySelector('.modal--call')
const callCloseButton = document.getElementById('callCloseButton')
const callModalButtons = document.querySelectorAll('.service-btn--call')
const callOverlay = document.getElementById('callOverlay')

toggleModalWindow(
  callModalWindow,
  callCloseButton,
  callModalButtons,
  callOverlay,
  document.body
)

const feedbackModalWindow = document.querySelector('.modal--feedback')
const feedbackCloseButton = document.getElementById('feedbackCloseButton')
const feedbackModalButtons = document.querySelectorAll('.service-btn--feedback')
const feedbackOverlay = document.getElementById('feedbackOverlay')

toggleModalWindow(
  feedbackModalWindow,
  feedbackCloseButton,
  feedbackModalButtons,
  feedbackOverlay,
  document.body
)
