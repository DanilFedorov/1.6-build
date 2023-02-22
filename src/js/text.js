const about = document.querySelector('.about__text')
const aboutButton = document.querySelector('.main__text-btn')

aboutButton.onclick = function () {
  about.classList.toggle('text--hide')
  aboutButton.classList.toggle('text-btn--rotate')
}
