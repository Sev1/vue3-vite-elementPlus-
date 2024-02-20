<script setup lang="ts">
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

onMounted(() => {
  console.log("home");
});
</script>
<template>
  <div class="home-wrap">
    <nav>
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/suggestion">建议</RouterLink>
      <RouterLink to="/help">帮助</RouterLink>
    </nav>
    <h1>这里是首页</h1>
  </div>
</template>
<style lang="less" scoped>
.home-wrap {
  h1 {
    color: red;
  }
}
</style>
