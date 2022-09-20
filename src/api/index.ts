import axios, {
  AxiosError,
  type AxiosResponse,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";
import { message } from "ant-design-vue";

const $http: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 1000 * 10,
});

$http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = window.localStorage.getItem("token");
    if (token && config.headers) {
      console.log(token);
      config.headers.authorization = token;
    }
    return config;
  },
  (err: AxiosError) => {
    Promise.reject(err);
  }
);

$http.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
  },
  (err: AxiosError) => {
    const { response } = err;
    message.error(`code:${response?.status} url:${response?.config?.url}`);
    Promise.reject(err);
  }
);

export { $http };
