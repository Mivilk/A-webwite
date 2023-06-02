const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});