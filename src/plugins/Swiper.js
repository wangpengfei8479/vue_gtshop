import Swiper from "swiper";
export let Floor1Swiper = () => {
  new Swiper("#floor1Swiper", {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
console.log("@@");
export let Floor2Swiper = () => {
  new Swiper("#floor2Swiper", {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
export let MySwiper = () => {
  new Swiper("#mySwiper", {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
