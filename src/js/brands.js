const brandsList = document.querySelector('.brands__list')
const buttonExpand = document.getElementById('brands--expand')

buttonExpand.addEventListener('click', function () {
  if (brandsList.classList.contains('brands__list--visible')) {
    brandsList.classList.remove('brands__list--visible')
    buttonExpand.classList.remove('main-btn--open')
    buttonExpand.textContent = 'Показать все'
    console.log('скрыто')
  } else {
    brandsList.classList.add('brands__list--visible')
    buttonExpand.classList.add('main-btn--open')
    buttonExpand.textContent = 'Скрыть'
    console.log('раскрыто')
  }
})

export default '*'
