const repair = document.querySelector('.repair')
const repairList = document.querySelector('.repair__list')
const repairButton = document.querySelector('.repair__text-btn')

let textButton = 'Показать все'

repairButton.addEventListener('click', () => {
  repair.classList.toggle('repair--hidden')
  repairList.classList.toggle('repair__list--hidden')
  repairButton.classList.toggle('text-btn--rotate')

  if (repairButton.textContent === textButton) {
    repairButton.textContent = 'Скрыть'
  } else {
    repairButton.textContent = textButton
  }
})
