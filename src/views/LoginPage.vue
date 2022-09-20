<script setup lang="ts">
import { loginApi } from "@/api/user";
import { message } from "ant-design-vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loginData = reactive({
  username: "",
  password: "",
});
const login = async () => {
  if (!loginData.username || !loginData.password) {
    message.error("账号或密码未填写！");
    return;
  }
  const res = await loginApi(loginData);
  const token = res.data.token;
  if (token) {
    window.localStorage.setItem("token", res.data.token);
    router.push("/post-list");
  } else {
    message.error(res.msg);
  }
};
</script>
<template>
  <a-input v-model:value="loginData.username" placeholder="请输入账号" />
  <a-input-password
    v-model:value="loginData.password"
    placeholder="请输入密码"
  />
  <a-button @click="login">登录</a-button>
</template>
