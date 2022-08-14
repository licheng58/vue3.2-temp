<template>
  <el-card class="index">
    <el-row :gutter="32" v-if="chartTrendData.allAmount">
      <el-col :span="8">
        <one-data :data="chartTrendData"></one-data>
      </el-col>
      <el-col :span="16">
        <one-chart :data="chartTrendData"></one-chart>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
  import oneData from './oneData.vue'
  import oneChart from './oneChart.vue'
  import { getChartTrend } from '@/api/chart.js'
  import { ref } from 'vue'

  // 获取数据
  const chartTrendData = ref({})
  const request_getChartTrend = async () => {
    const res = await getChartTrend()
    chartTrendData.value = res
    // console.log(res)
  }
  request_getChartTrend()
</script>

<style lang="scss" scoped>
  .index {
    height: 286px;
    margin-bottom: 20px;
  }
</style>
