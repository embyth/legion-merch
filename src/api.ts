import axios, {AxiosInstance} from "axios";

import {ApiConfig} from "./helpers/const";

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiConfig.URL,
    timeout: ApiConfig.TIMEOUT,
    withCredentials: ApiConfig.COOKIES,
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
