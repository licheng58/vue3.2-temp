<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="18">
        <s2-vue :data="s2Data"></s2-vue>
      </el-col>
      <el-col :span="6">
        <table-sheet
          v-for="(item, index) in regionsData"
          :key="item"
          class="mb-20"
          :data="item"
          :isSelected="currentIndex === index"
          @click="changeCurrentIndex(index)"
        ></table-sheet>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
  import S2Vue from './components/s2Vue.vue'
  import TableSheet from './components/tableSheet.vue'
  import { getChartRegions, getChartSheet } from '@/api/chart'
  import { ref } from 'vue'

  const regionsData = ref([])
  const request_getChartRegions = async () => {
    const { regions } = await getChartRegions()
    regionsData.value = regions
    request_getChartSheet(regionsData.value[0].id)
  }

  request_getChartRegions()

  let currentIndex = ref(0)
  const changeCurrentIndex = (index) => {
    currentIndex.value = index
    request_getChartSheet(regionsData.value[index].id)
  }

  const s2Data = ref([])
  const request_getChartSheet = async (id) => {
    const res = await getChartSheet(id)
    s2Data.value = res
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 782px;
  }
</style>
