const aside = document.querySelector('.menu')
const asideButton = document.querySelector('.service-btn--close')
const headerButton = document.querySelector('.service-btn--menu')

asideButton.onclick = function () {
  aside.classList.toggle('menu--hide')
}

headerButton.onclick = function () {
  aside.classList.toggle('menu--hide')
}
