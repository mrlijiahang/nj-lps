<template>
      <!-- swiper -->
  <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../img/6.jpg" width="100%" height="310px;" alt="">
          <p>2017联想Tech World大会商用分会专题报道</p>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 360px;
  }
  .swiper-container .swiper-slide {
    /* text-align: center; */
    /* font-size: 38px;
    font-weight: 700; */
    background-color: #eee;
    /* display: -webkit-box;
    display: -ms-flexbox;
    display: flex; */
    /* -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; */
}
p{
  background: rgba(0,0,0,0.7);
  height: 50px;
  color: white;
}
</style>
