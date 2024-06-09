import axios from "axios";
import { url } from "../utils/baseUrl";

export const $host = axios.create({
  baseURL: url.REACT_APP_API_URL,
});

export const $authHost = axios.create({
  baseURL: url.REACT_APP_API_URL,
});

const AuthInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(AuthInterceptor);
