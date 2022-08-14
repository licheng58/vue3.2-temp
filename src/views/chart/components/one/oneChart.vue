<template>
  <div class="chart" ref="target"></div>
</template>

<script setup>
  import * as echarts from 'echarts'
  import { defineProps, ref, onMounted } from 'vue'

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  })

  const target = ref(null)
  let mChart
  onMounted(() => {
    mChart = echarts.init(target.value)
    const options = {
      // 鼠标移入之后的提示框配置
      tooltip: {
        // 鼠标移入到坐标轴时，触发提示框
        trigger: 'axis',
        // 移入坐标轴时，提示框的配置项
        axisPointer: {
          // 显示十字准星指示器
          type: 'cross',
          // 指示器样式
          crossStyle: {
            // 色值
            color: '#999',
          },
        },
      },
      // 图例配置
      legend: {
        // 图例数据
        data: ['月累计收益', '日收益曲线'],
        // 图例位置
        right: 0,
      },
      // echarts 网格绘制的位置，对应 上、右、下、左
      grid: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
        // 计算边距时，包含标签
        containLabel: true,
      },
      // X 轴配置
      xAxis: {
        // 坐标轴类型，category：类目轴
        type: 'category',
        // 坐标轴数据
        data: props.data.monthAmountList.map((item) => item.time),
        // 刻度尺配置
        axisTick: {
          // 不显示坐标轴刻度
          show: false,
        },
      },
      // y 轴配置
      yAxis: {
        // Y 轴类型，value：数值轴
        type: 'value',
        // 最小值
        min: 0,
        // 最大值
        max: function (value) {
          // 取整
          return parseInt(value.max * 1.2)
        },
        // 刻度上展示的文字
        axisLabel: {
          formatter: '{value} 万元',
        },
      },
      // 图表类型
      series: [
        // 第一个图表
        {
          // 图表名字，对应 legend.data[0]
          name: '月累计收益',
          // 图表类型
          type: 'bar',
          // 柱的宽度
          barWidth: 20,
          // 提示框展示配置
          tooltip: {
            // 提示框展示的内容
            valueFormatter: function (value) {
              return value + '万元1'
            },
          },
          // 数据源
          data: props.data.monthAmountList.map((item) => item.amount),
        },
        // 第二个图表
        {
          // 图表名字，对应 legend.data[1]
          name: '日收益曲线',
          // 图表类型
          type: 'line',
          // 颜色
          color: '#6EC6D0',
          // 平滑
          smooth: true,
          // 提示框展示配置
          tooltip: {
            // 提示框展示的内容
            valueFormatter: function (value) {
              return value + '万元2'
            },
          },
          // 数据源
          data: props.data.dailyCurve.map((item) => item.amount),
        },
      ],
    }

    mChart.setOption(options)
  })
</script>

<style lang="scss" scoped>
  .chart {
    height: 100%;
  }
</style>
