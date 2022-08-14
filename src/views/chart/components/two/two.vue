<template>
  <div class="index">
    <el-row :gutter="20">
      <el-col :span="16">
        <charts-vue></charts-vue>
      </el-col>
      <el-col :span="8">
        <calender-vue></calender-vue>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
  import chartsVue from './components/charts.vue'
  import calenderVue from './components/calender.vue'
</script>

<style lang="scss" scoped>
  .index {
    height: 443px;
    margin-bottom: 20px;
    ::v-deep .el-row {
      height: 100%;
    }
  }
</style>
