<template>
  <!-- 线上图标/组件图标 -->
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" :class="className" />
  <!-- svg图标 -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
  import { isExternal as external } from '@/utils/iconPath';
  import { defineProps, computed } from 'vue';
  const props = defineProps({
    // icon 图标
    icon: {
      type: String,
      required: true,
    },
    // 图标类名
    className: {
      type: String,
      default: '',
    },
  });

  /**
   * 判断是否为外部图标
   */
  const isExternal = computed(() => external(props.icon));
  /**
   * 外部图标样式
   */
  const styleExternalIcon = computed(() => ({
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`,
  }));
  /**
   * 项目内图标
   */
  const iconName = computed(() => `#icon-${props.icon}`);
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
  }

  // close 按钮
  .el-icon-close {
    width: 12px;
    height: 12px;
    line-height: 10px;
    vertical-align: -2px;
    border-radius: 50%;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-origin: 100% 50%;
    &:before {
      transform: scale(0.6);
      display: inline-block;
      vertical-align: -3px;
    }
    &:hover {
      background-color: #b4bccc;
      color: #fff;
    }
  }
</style>
