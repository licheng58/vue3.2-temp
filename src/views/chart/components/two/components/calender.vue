<template>
  <el-card
    class="container"
    :body-style="{
      padding: 0,
    }"
  >
    <el-calendar class="calendar" v-model="currentDate">
      <template #dateCell="{ data }">
        <p :class="[data.isSelected ? 'is-selected' : '', calendarItemBgClass(data.day)]">
          <!-- 显示的内容 -->
          {{ data.day.split('-').slice(2).join('') }}
          <span>{{ getTadayAmount(data.day) }}</span>
          <br />
        </p>
      </template>
    </el-calendar>
  </el-card>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { getChartCalendar } from '@/api/chart.js'
  import bus from '@/utils/eventBus'

  // 选中的日期
  const currentDate = ref(new Date())
  const calendarList = ref([])
  watch(currentDate, (val) => {
    bus.emit('changeCurrentDate', val)
  })

  // 获取日历数据
  const request_getChartCalendar = async () => {
    const { result } = await getChartCalendar()
    calendarList.value = result
  }
  request_getChartCalendar()

  //获取指定日期
  /**
   * 返回指定日期收益数据，在日历中进行展示
   */
  const getTadayAmount = (date) => {
    // 根据日期，获取当日数据
    const tadayData = calendarList.value.find((item) => item.date === date)
    // 判断当日数据是否存在
    if (!tadayData) {
      return 0
    }
    // 获取当日收益
    const tadayAmount = tadayData.amount
    return tadayAmount
  }

  /**
   * 返回日历的背景
   * */
  const calendarItemBgClass = (day) => {
    if (getTadayAmount(day) > 0) {
      return 'profit'
    } else if (getTadayAmount(day) < 0) {
      return 'loss'
    }
    return ''
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 443px;
    .calendar {
      ::v-deep .el-calendar__body {
        padding: 0 12px 12px;
        font-size: 14px;
      }
      ::v-deep .el-calendar-day {
        height: 66px !important;
        padding: 0 !important;
        p {
          height: 100%;
          padding: 8px;
        }
        // 金额样式
        .amount {
          font-size: 12px;
        }
        // 正收益
        .profit {
          background-color: #f3fff3;
          span {
            color: #649840;
          }
        }
        // 负收益
        .loss {
          background-color: #ffe7e7;
          span {
            color: #b65d59;
          }
        }

        .is-selected {
          background-color: #d6f2ff;
        }
      }
    }
  }
</style>
