<template>
  <el-card class="charts-container">
    <div ref="target" class="chart"></div>
  </el-card>
</template>

<script setup>
  import { getChartTimeAmount } from '@/api/chart.js'
  import { onMounted, ref } from 'vue'
  import * as echarts from 'echarts'
  import { userI18n } from 'vue-i18n'
  const i18n = userI18n()
  const target = ref(null)
  let mChart
  onMounted(() => {
    mChart = echarts.init(target.value)
    const options = {
      //鼠标移入之后的提示框配置
      tooltip: {
        //鼠标移入坐标时，触发提示框
        trigger: 'axis',
        // 移入坐标轴时，提示框的配置项
        axisPointer: {
          //指示器展示阴影
          type: 'shadow',
        },
      },

      //图标配置
      legend: {
        //图例数据
        data: [
          `${i18n.t('msg.chart.income')}(${i18n.t('msg.chart.unit')})`,
          `${i18n.t('msg.chart.expend')}(${i18n.t('msg.chart.unit')})`,
          `${i18n.t('msg.chart.balance')}(${i18n.t('msg.chart.unit')})`,
        ],
        //图例位置
        right: 0,
        // echarts 网格绘制的位置 对应 上 右 下 左
        grid: {
          top: 28,
          right: 0,
          bottom: 0,
          left: 0,
          //计算边距时 包含标签
          containLabel: true,
        },
      },

      // x轴配置
      xAxis: [
        {
          // 数值轴 适用于连续数据
          type: 'value',
        },
      ],

      // y轴配置
    }
    mChart.setOption(options)
  })
  const request_getChartTimeAmount = async (date) => {
    const res = await getChartTimeAmount(date)
    console.log(res)
  }
  request_getChartTimeAmount()
</script>

<style lang="scss" scoped>
  .charts-container {
    height: 100%;
    .chart {
      height: 403px;
    }
  }
</style>
