Echarts 操作流程 5步
npm i --save echarts@5.3.2

1 - 创建dom容器 并指定大小（ref。。。）
2 - 导入echarts模块 import * as echarts from 'echarts'
3 - 利用 echarts.init(target)方法，获取echarts实例 target 为对应元素
const target = ref(null)
let mChart
onMounted(() => {
  mChart = echarts.init(target.value)
})

4 - 配置options对象（echarts渲染的核心，不同的options 意味着不同的图标表现）
  const options = {
    // 图表标题配置  
    title: {
      // 标题文本   
      text: 'ECharts 入门示例'
    },
    // 图例配置
    legend: {
      // 图例数据
      data: ['销量']
    },
    // X 轴配置
    xAxis: {
      // 数据
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    // Y 轴配置
    yAxis: [{}],
    // 图表类型（可以指定多个）
    series: [
      {
        // 图表名字，对应 legend.data[0]
        name: '销量',
        // 图表的类型
        type: 'bar',
        // 图表的数据
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

5 - 利用 mchart.setOption 方法 配置 options
mChart.setOption(options)
