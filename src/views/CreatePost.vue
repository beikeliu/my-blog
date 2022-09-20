<script setup lang="ts">
import { addPost } from "@/api/post";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const content = ref<string>("");
const submit = async () => {
  await addPost({ content: content.value });
  close();
};
const cancel = () => {
  close();
};
const close = () => {
  content.value = "";
  router.push("/");
};
</script>
<template>
  <a-textarea v-model:value="content" :rows="4" />
  <a-button @click="submit">提交</a-button>
  <a-button @click="cancel">取消</a-button>
</template>
