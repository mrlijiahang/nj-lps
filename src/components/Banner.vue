<template>
  <div class="banner">
  </div>
</template>
<style scoped>
.banner{
  background-image: url('../img/header.jpg');
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
}
@media screen and (max-width:414px) {
  .banner{
background-image: url('../img/mobilebanner.jpg');
  height: 275px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  }
  

}


</style>

