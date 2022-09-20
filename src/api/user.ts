import { $http } from ".";
import type { DataModel } from "./types";

// 登录
export const loginApi = (data: {
  username: string;
  password: string;
}): Promise<DataModel<{ token: string }>> => $http.post("/login", data);
