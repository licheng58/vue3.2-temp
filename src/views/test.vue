<template>
  <div id="demo">
    <div @mousemove="xCoordinate" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
      <h3>Move your mouse across the screen...</h3>
      <p>x: {{ x }}</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const x = ref(0);

  const xCoordinate = (e) => {
    this.x = e.clientX;
  };
</script>

<style lang="scss" scoped>
  .movearea {
    transition: 0.2s background-color ease;
  }
</style>
