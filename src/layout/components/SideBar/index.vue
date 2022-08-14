<template>
  <div class="side-bar">
    <div class="logo-container">
      <el-avatar :size="44" shape="square" :src="img" />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">vue3.2-admin</h1>
    </div>
    <el-scrollbar>
      <sidebar-mune />
    </el-scrollbar>
  </div>
</template>

<script setup>
import sidebarMune from './sideBarMune.vue'
const img = require('@/assets/dog.jpg')
</script>

<style lang="scss" scoped>
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
