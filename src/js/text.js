const about = document.querySelector('.about__text')
const textContainer = document.querySelector('.text__container')
const aboutButton = document.querySelector('.about__text-btn')

let textButton = 'Читать далее'

aboutButton.addEventListener('click', () => {
  textContainer.classList.toggle('text__container--hidden')
  aboutButton.classList.toggle('text-btn--rotate')

  if (aboutButton.textContent === textButton) {
    aboutButton.textContent = 'Скрыть'
  } else {
    aboutButton.textContent = textButton
  }
})
