<template>
  <el-card
    :body-style="{
      padding: 0,
    }"
    class="pie"
  >
    <div class="target" ref="target"></div>
  </el-card>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { getChartPie } from '@/api/chart'
  import * as echarts from 'echarts'
  import { useI18n } from 'vue-i18n'
  const i18n = useI18n()

  // 获取接口数据
  const data = ref([])
  const request_getChartPie = async () => {
    const result = await getChartPie()
    data.value = result
    renderChart(data)
  }
  request_getChartPie()

  const target = ref(null)
  let myChart = null
  onMounted(() => {
    myChart = echarts.init(target.value)
  })

  const renderChart = (val) => {
    const options = {
      // 标题
      title: {
        text: i18n.t('msg.chart.pieChartTitle'),
      },
      // 鼠标移入的提示
      tooltip: {
        trigger: 'item',
        // {b}：数据名。{c}：数值。
        formatter: `{b}: {c} ${i18n.t('msg.chart.unit')}`,
      },
      series: [
        {
          // 饼图
          type: 'pie',
          // 饼图的半径。第一项为内半径，第二项为外半径
          radius: ['40%', '70%'],
          // 每个 item 的样式
          itemStyle: {
            // 圆角
            borderRadius: 10,
            // 边框色
            borderColor: '#fff',
            // 边框宽度
            borderWidth: 2,
          },
          // 文字
          label: {
            // 默认不显示
            show: false,
            // {b}：数据名。{d}：百分比。
            formatter: '{b}: {d}%',
            // 居中展示（在鼠标移入时）
            position: 'center',
          },
          // 高亮状态的扇区和标签样式
          emphasis: {
            // 文本
            label: {
              show: true,
              fontSize: '22',
              fontWeight: 'bold',
            },
          },
          data: val.value,
        },
      ],
    }
    myChart.setOption(options)
  }
</script>

<style lang="scss" scoped>
  .pie {
    height: 240px;
    margin-bottom: 20px;
    .target {
      height: 240px;
    }
  }
</style>
