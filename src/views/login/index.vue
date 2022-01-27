<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="rules" class="login-form">
      <div class="login-title">
        <h3>欢迎登陆</h3>
      </div>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username">
          <template #prepend>
            <svg-icon icon="user" />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" show-password>
          <template #prepend>
            <svg-icon icon="password" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w-100" @click="onSubmit(loginForm)">登 陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { validatePassword } from './index';
  const loginForm = ref({
    username: 'super-admin',
    password: '123456',
  });

  const rules = ref({
    username: [
      {
        required: true,
        message: '请输入用户名！',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        // message: '请输入密码！',
        trigger: 'blur',
        validator: validatePassword(),
      },
    ],
  });

  const onSubmit = (form) => {
    console.log(form.username);
  };
</script>

<style lang="scss" scoped>
  .login-container {
    background-color: #597493;
    height: 100%;
    .login-form {
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
