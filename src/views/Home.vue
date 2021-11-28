<template>
  <div class="query">
    <div class="box">
      <!-- 
      <i :class="ani?'card card1 ani1':'card card1'"></i>
      <i :class="ani?'card card2 ani2':'card card2'"></i>
      <i :class="ani?'card card3 ani3':'card card3'"></i>
      <i :class="ani?'card card4 ani4':'card card4'"></i>
      <i :class="ani?'card card5 ani5':'card card5'"></i>
      <i :class="ani?'card card6 ani6':'card card6'"></i> -->
       <i :class="ani?'card card'+item+' ani'+item:'card card'+item" v-for="item in 6" :key="item"></i>
    </div>
    <i class="btn" @click="goAni">发牌</i>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      ani:false
    };
  },
  created() {

  },
  mounted() {

  },
  methods: {
    goAni(){
      this.ani=!this.ani
    }
  },
}
</script>

<style lang='less' scoped>
.query{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  .btn{
    width: 80px;
    height: 50px;
    background-color: pink;
    border-radius: 5px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    color:powderblue
  }
  .box{
    position: fixed;
    top: 80px;
    height: 200px;
    display: flex;
    justify-content: center;
  }
  .card{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 160px;
    height: 200px;
    background-color: blue;
    transform: rotate(-20deg);
    transform-origin: 50% 675%;
  }
 .card2{
   background-color: red;
   transform: rotate(-12deg);
   z-index: 2;
 }
 .card3{
   background-color: yellow;
   transform: rotate(-4deg);
   z-index: 3;
 }
  .card4{
   background-color: red;
   transform: rotate(4deg);
   z-index: 4;
 }
 .card5{
   background-color: blue;
   transform: rotate(12deg);
   z-index: 5;
 }
 .card6{
   background-color: chartreuse;
   transform: rotate(20deg);
   z-index: 6;
 }
//   .card2{
//    background-color: red;
//    transform: rotate(10deg);
//  }
//  .card1{
//    animation: moveAni 1s infinite;
//  }
.ani2{
  animation: moveAni2 0.12s linear;
}
.ani3{
  animation: moveAni3 0.24s linear;
}
.ani4{
  animation: moveAni4 0.36s linear;
}
.ani5{
  animation: moveAni5 0.48s linear;
}
.ani6{
  animation: moveAni6 0.6s linear;
}
 @keyframes moveAni2 {
   0%{
      transform: rotate(-20deg);
   }
   100%{
     transform: rotate(-12deg);
   }
 }
  @keyframes moveAni3 {
   0%{
      transform: rotate(-20deg);
   }
   100%{
     transform: rotate(-4deg);
   }
 }
 @keyframes moveAni4 {
   0%{
      transform: rotate(-20deg);
   }
   100%{
     transform: rotate(4deg);
   }
 }
 @keyframes moveAni5 {
   0%{
      transform: rotate(-20deg);
   }
   100%{
     transform: rotate(12deg);
   }
 }
 @keyframes moveAni6 {
   0%{
      transform: rotate(-20deg);
   }
   100%{
     transform: rotate(20deg);
   }
 }
}
</style>