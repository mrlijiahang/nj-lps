<template>
  <div>
      <Titles t1="11111"></Titles> 
      <div style="margin-top:20px" class="clearfix bord">
      <div class="people" v-for="people in peoples" :key="people.id">
          <div  class ='peopletop'></div>
          <div>{{msg}}</div>
          <div>{{msg1}}</div>
          <div>{{msg2}}</div>
      </div>
      </div>
  </div>
</template>
<script>
import Titles from 'components/Titles.vue'
export default {
    components:{
        Titles
    },
  data:()=>({
      peoples:[
          {},
          {},
          {},
          {},
          {},
          {}

      ],
      msg:'王大锤',
      msg1:'联想集团',
      msg2:'华北大区总经理',
  })
}
</script>
<style scoped>
.people{
    /* border: 1px solid black; */
    box-sizing: border-box;
    width: 33%;
    height: 234px;
    float: left;
    padding-top:13px;
    text-align: center; 
    color:white;
}
.peopletop{
    width:150px;height:150px;border-radius:50%;
    border:1px solid white;
    margin:auto;
    background-image: url('../img/YH.jpg');
    background-repeat: no-repeat;
    background-origin: center center;
    background-size: cover;
}
.bord{
    border: 1px solid white;
    /* padding-bottom: 40px; */
}

@media screen and (max-width:414px) {
    .peopletop{
    width:100px;
    height: 100px;
    border-radius: 50%;
     border: 1px solid white;
}
.people{
    height: 210px;
}

}

</style>


