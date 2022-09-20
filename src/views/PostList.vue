<script setup lang="ts">
import { getPost } from "@/api/post";
import type { PostListModel } from "@/api/types";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const createPost = () => {
  router.push("/create-post");
};
const postList = ref<PostListModel>([]);

onMounted(async () => {
  const res = await getPost();
  postList.value = res.data;
});
</script>
<template>
  <a-button type="primary" @click="createPost">新建帖子</a-button>
  <a-list item-layout="horizontal" :data-source="postList">
    <template #renderItem="{ item }">
      <a-list-item>
        {{ item.content }}
      </a-list-item>
    </template>
  </a-list>
</template>
