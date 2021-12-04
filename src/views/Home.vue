<template>
  <div class="routes">
    <span @click="$router.push({ path: '/star' })">星空</span>
    <span @click="$router.push({ path: '/card' })">发牌</span>
  </div>
</template>

<script>
import  { initStar } from "../utils/starry";
export default {
  name: '',
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created(){
    initStar()
  }
};
</script>

<style lang="less" scoped>
.routes {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span{
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: yellow;
    cursor: pointer;
    margin-bottom: 10px;
  }
}
</style>
