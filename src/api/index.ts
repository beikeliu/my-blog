import axios, {
  AxiosError,
  type AxiosResponse,
  type AxiosInstance,
} from "axios";
import { message } from "ant-design-vue";
import "ant-design-vue/es/message/style/css";

const $http: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 1000 * 10,
});

$http.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  (err: AxiosError) => {
    const { response } = err;
    message.error(`code:${response?.status} url:${response?.config?.url}`);
    Promise.reject(err);
  }
);

export { $http };
