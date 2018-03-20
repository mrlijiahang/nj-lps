<template>
<div class="crasouel" >
    <swiper-page></swiper-page>
    <!-- <div class="miaoshu">

    </div> -->

</div>
     


</template>
<script>
import SwiperPage from 'components/SwiperPage.vue'
export default {
      components: {
          SwiperPage
      }
  
}
</script>

<style scoped>

.crasouel{
    background: gray;
    height: 100%;
}
.miaoshu{
    height: 59px;
    width: 100%;
    background: red;
}

</style>

