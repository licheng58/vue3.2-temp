<template>
  <ImportExcel :onSuccess="onSuccess" />
</template>

<script setup>
  import ImportExcel from '@/components/ImportExcel';
  import { useI18n } from 'vue-i18n';
  import { userBatchImport } from '@/api/user-manage';
  import { ElMessage } from 'element-plus';
  import { useRouter } from 'vue-router';
  import { USER_RELATIONS, formatDate } from './utils';
  const router = useRouter();
  const i18n = useI18n();
  /**
   * 数据解析成功之后的回调
   */

  /* eslint-disable */
  const onSuccess = async ({ header, results }) => {
    const updateData = generateData(results);
    await userBatchImport(updateData);
    ElMessage.success({
      message: results.length + i18n.t('msg.excel.importSuccess'),
      type: 'success',
    });
    router.push('/user/manage');
  };

  /**
   * 筛选数据
   */
  const generateData = (results) => {
    const arr = [];
    results.forEach((item) => {
      const userInfo = {};
      Object.keys(item).forEach((key) => {
        if (USER_RELATIONS[key] === 'openTime') {
          userInfo[USER_RELATIONS[key]] = formatDate(item[key]);
          return;
        }
        userInfo[USER_RELATIONS[key]] = item[key];
      });
      arr.push(userInfo);
    });
    return arr;
  };
</script>

<style lang="scss" scoped></style>
