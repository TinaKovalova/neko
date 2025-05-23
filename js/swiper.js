const gallerySwiper = new Swiper(".gallery__swiper .swiper", {
  loop: true,
  speed: 2500,
  grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".gallery__swiper .swiper-button-next",
    prevEl: ".gallery__swiper .swiper-button-prev",
  },
});


const reviewsSwiper = new Swiper(".reviews__swiper .swiper", {
    loop: true,
  speed: 2500,
  grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".reviews__swiper .swiper-button-next",
    prevEl: ".reviews__swiper .swiper-button-prev",
  },
});

