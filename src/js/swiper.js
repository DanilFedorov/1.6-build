if (screen.width < 768) {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',

    slidesRerView: 'auto',
    spaceBetween: 16,
    width: 240,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

if (screen.width >= 768) {
  let swiperContainer = document.getElementById('swiper');
  let swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
  let swiperSlides = swiperWrapper.querySelectorAll('.swiper-slide');

  swiperContainer.classList.remove('swiper');
  swiperWrapper.classList.remove('swiper-wrapper');
  for (let i = 0; i < swiperSlides.length; i++) {
    swiperSlides[i].classList.remove('swiper-slide');
  }
}
