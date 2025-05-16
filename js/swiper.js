const gallerySwiper = new Swiper(".gallery__swiper .swiper", {
  //   loop: true,
  speed: 2500,
  grabCursor: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //     pauseOnMouseEnter: true,
  //   },
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
