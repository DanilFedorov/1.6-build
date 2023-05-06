const repair = document.querySelector('.repair--type')
const repairList = document.querySelector('.repair__list--type')
const repairButton = document.querySelector('.repair__text-btn--type')

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
