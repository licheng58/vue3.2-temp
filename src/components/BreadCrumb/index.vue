<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrunbData" :key="item.path">
        <span class="no-redirect" v-if="index === breadcrunbData.length - 1">{{ generateTitle(item.meta.title) }}</span>
        <span class="redirect" @click.prevent="handleTo(item)" v-else>{{ generateTitle(item.meta.title) }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { generateTitle } from '@/utils/i18n';

  const route = useRoute();
  const breadcrunbData = ref([]);
  const getBreadcrumbData = () => {
    breadcrunbData.value = route.matched.filter((v) => {
      return v.meta && v.meta.title;
    });
  };

  watch(
    route,
    () => {
      getBreadcrumbData();
    },
    { immediate: true },
  );

  const router = useRouter();
  const handleTo = (item) => {
    router.push(item.path);
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables.scss';
  .breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;

    ::v-deep .no-redirect {
      color: #97a8be;
      cursor: text;
    }

    .redirect {
      cursor: pointer;
    }

    .redirect:hover {
      color: #{$menuText};
    }
  }
</style>
