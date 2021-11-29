<template>
  <div class="routes">
    <span @click="$router.push({ path: '/star' })">星空</span>
    <span @click="$router.push({ path: '/card' })">发牌</span>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
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
}
</style>
