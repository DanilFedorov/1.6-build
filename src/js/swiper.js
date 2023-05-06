import Swiper from 'swiper'
import { Pagination } from 'swiper'

let init = false
let swiper

function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      swiper = new Swiper('.swiper', {
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
    if (swiper) {
      swiper.destroy()
      swiper = null
    }
    init = false
  }
}

swiperCard()
window.addEventListener('resize', swiperCard)

export default swiperCard
