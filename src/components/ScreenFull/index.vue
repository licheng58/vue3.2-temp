<template>
  <div @click="onToggle">
    <el-tooltip :content="$t('msg.navBar.screenfull')">
      <span><svg-icon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" /></span>
    </el-tooltip>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import screenfull from 'screenfull';

  // 是否全屏
  const isFullscreen = ref(false);

  // 监听变化
  const change = () => {
    isFullscreen.value = screenfull.isFullscreen;
  };

  // 切换事件
  const onToggle = () => {
    console.log(222);
    screenfull.toggle();
  };

  // 设置侦听器
  onMounted(() => {
    screenfull.on('change', change);
  });

  // 删除侦听器
  onUnmounted(() => {
    screenfull.off('change', change);
  });
</script>

<style lang="scss" scoped></style>
