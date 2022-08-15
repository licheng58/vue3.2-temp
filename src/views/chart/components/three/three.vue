<template>
  <div class="index">
    <el-row :gutter="20">
      <el-col :span="8">
        <pie></pie>
        <world-cloud></world-cloud>
      </el-col>
      <el-col :span="16">
        <b-map></b-map>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
  import Pie from './components/Pie.vue'
  import WorldCloud from './components/WorldCloud.vue'
  import BMap from './components/Bmap.vue'
</script>

<style lang="scss" scoped>
  .index {
    height: 500px;
    margin-bottom: 20px;
  }
</style>
