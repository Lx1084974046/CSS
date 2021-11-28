<template>
  <div class="about">
    <div class="content">
      <i :class="ani?'card card'+item+' ani'+item:'card card'+item" v-for="item in 7" :key="item">{{item}}</i>
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
.about{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn{
    width: 80px;
    height: 50px;
    background-color: pink;
    border-radius: 5px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    color:powderblue;
    position: absolute;
    top: 500px;
    left: 720px;
  }
  .content{
    display: flex;
    position: absolute;
    top: 200px;
    left: 680px;
    .card{
      width: 160px;
      height: 200px;
      background-color: pink;
      position: absolute;
      transform-origin: 50% 1020%;
    }
    .card1{
       transform: rotate(-15deg);
    }
    .card2{
      transform: rotate(-10deg);
      z-index: 2;
    }
    .card3{
      transform: rotate(-5deg);
      z-index: 3;
    }
    .card4{
      transform: rotate(0deg);
      z-index: 4;
    }
    .card5{
      transform: rotate(5deg);
      z-index: 5;
    }
    .card6{
       transform: rotate(10deg);
       z-index: 6;
    }
    .card7{
       transform: rotate(15deg);
       z-index: 7;
    }
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
.ani7{
  animation: moveAni7 0.72s linear;
}
     @keyframes moveAni2 {
   0%{
      transform: rotate(-15deg);
   }
   100%{
     transform: rotate(-10deg);
   }
 }
 @keyframes moveAni3 {
   0%{
      transform: rotate(-15deg);
   }
   100%{
     transform: rotate(-5deg);
   }
 }
  @keyframes moveAni4 {
   0%{
      transform: rotate(-15deg);
   }
   100%{
     transform: rotate(0deg);
   }
 }
 @keyframes moveAni5 {
   0%{
      transform: rotate(-15deg);
   }
   100%{
     transform: rotate(5deg);
   }
 }
  @keyframes moveAni6 {
   0%{
      transform: rotate(-15deg);
   }
   100%{
     transform: rotate(10deg);
   }
 }
 @keyframes moveAni7 {
   0%{
      transform: rotate(-15deg);
   }
   100%{
     transform: rotate(15deg);
   }
 }
  }
}
</style>