const brandsList = document.querySelector('.brands__list');
const buttonExpand = document.getElementById('brends__expand');

buttonExpand.addEventListener('click', function () {
  if (brandsList.classList.contains('brands__list--visible')) {
    brandsList.classList.remove('brands__list--visible');
    buttonExpand.classList.remove('main-btn--open');
    buttonExpand.textContent = 'Показать все';
  } else {
    brandsList.classList.add('brands__list--visible');
    buttonExpand.classList.add('main-btn--open');
    buttonExpand.textContent = 'Скрыть';
  }
});
