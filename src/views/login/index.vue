<template>
  <div class="login">
    <div class="loginForm">
      <el-form ref="loginForm" :model="loginForm">
        <div class="login-title">
          <h3>欢迎登陆</h3>
        </div>
        <el-form-item>
          <el-input v-model="loginForm.username" />
        </el-form-item>

        <el-form-item>
          <el-input v-model="loginForm.password" />
        </el-form-item>

        <el-button type="primary" class="w-100">登 陆</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const loginForm = ref({
    username: 'super-admin',
    password: '123456',
  });
</script>

<style lang="scss" scoped>
  .login {
    background-color: #597493;
    height: 100%;
    .loginForm {
      width: 450px;
      border: 1px solid #000;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: 30px;
    }

    .login-title {
      padding-bottom: 15px;
      text-align: center;
      color: var(--ThemeColor);
      font-size: 24px;
    }
  }
</style>
