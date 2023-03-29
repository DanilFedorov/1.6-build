import Swiper, { Pagination } from 'swiper'

let init = false

function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      let swiper = new Swiper('.swiper', {
        modules: [Pagination],
        spaceBetween: 16,
        width: 260,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  } else {
    swiper.destroy()
    init = false
  }
}
swiperCard()
window.addEventListener('resize', swiperCard)

export default '*'
