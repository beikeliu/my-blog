import { $http } from ".";
import type { DataModel, PostListModel } from "./types";

// 获取帖子列表
export const getPost = (): Promise<DataModel<PostListModel>> =>
  $http.get("/post");

// 新增帖子
export const addPost = (data: {
  content: string;
}): Promise<DataModel<"success">> => $http.post("/post", data);
