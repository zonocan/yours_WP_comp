// top-slider

// aboveswiper
var aboveSwiper = new Swiper(".aboveswiper",{
    loop: true, // ループ有効
    slidesPerView: 4, // 一度に表示する枚数
    speed: 10000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
    },    
});

// downswiper
var downSwiper = new Swiper(".downswiper",{
    loop: true, // ループ有効
    slidesPerView: 4, // 一度に表示する枚数
    speed: 10000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
      reverseDirection: true,
    },    
});

// end top-slider