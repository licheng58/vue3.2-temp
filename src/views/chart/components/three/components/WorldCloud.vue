<template>
  <el-card
    :body-style="{
      padding: 0,
    }"
    class="world-cloud-container"
  >
    <div class="world-cloud" ref="target"></div>
  </el-card>
</template>

<script setup>
  import { getChartWordCloud } from '@/api/chart'
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  import 'echarts-wordcloud'
  import { useI18n } from 'vue-i18n'
  import { randomRGB } from '@/utils/color'
  import wordCloudBg from '@/assets/dog.jpg'

  const i18n = useI18n()
  const data = ref([])
  const request_getChartWordCloud = async () => {
    const res = await getChartWordCloud()
    data.value = res
    renderChart()
  }
  request_getChartWordCloud()

  const target = ref(null)
  let myChart
  onMounted(() => {
    myChart = echarts.init(target.value)
  })

  const renderChart = () => {
    let maskImage = new Image()
    maskImage.src = wordCloudBg

    let option = {
      title: {
        text: i18n.t('msg.chart.cloudChartTitle'),
      },
      series: [
        {
          //类型
          type: 'wordCloud',
          //数据映射文本的大小范围
          sizeRange: [4, 80],
          //文字的旋转范围
          rotationRange: [0, 0],
          //单词之间的间距
          gridSize: 0,
          //渲染动画
          layoutAnimation: true,
          //字体
          textStyle: {
            //随机颜色
            color: randomRGB,
          },
          //高亮字体
          emphasis: {
            textStyle: {
              ontWeight: 'bold',
              color: '#000',
            },
          },
          // 绘制将排除图像的轮廓
          maskImage: maskImage,
          data: data.value,
        },
      ],
    }

    // 等待图像加载完成之后
    maskImage.onload = function () {
      myChart.setOption(option)
    }
  }
</script>

<style lang="scss" scoped>
  .world-cloud-container {
    height: 240px;
    .world-cloud {
      height: 240px;
    }
  }
</style>
