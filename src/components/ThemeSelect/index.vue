<template>
  <!-- 主题图标  
  v-bind：https://v3.cn.vuejs.org/api/instance-properties.html#attrs -->
  <el-dropdown v-bind="$attrs" trigger="click" class="theme" @command="handleSetTheme">
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <span> <svg-icon icon="change-theme" /></span>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 展示弹出层 -->
  <selectColor v-model="showVisibles" />
</template>

<script setup>
  import { ref } from 'vue';
  import selectColor from './selectColor.vue';

  const showVisibles = ref(false);

  const handleSetTheme = () => {
    showVisibles.value = true;
  };
</script>

<style lang="scss" scoped></style>
