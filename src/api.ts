import axios from "axios";

import {ApiConfig, ErrorStatusCode} from "./helpers/const";

export const createAPI = () => {
  const api = axios.create({
    baseURL: ApiConfig.URL,
    timeout: ApiConfig.TIMEOUT,
    withCredentials: ApiConfig.COOKIES,
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    const {response} = error;

    switch (response.status) {
      case ErrorStatusCode.BAD_REQUEST:
        console.error(`Bad request`);
        break;
      case ErrorStatusCode.FORBIDDEN:
        console.error(`Forbidden`);
        break;
      case ErrorStatusCode.UNAUTHORIZED:
        console.error(`Unauthorized`);
        break;
      case ErrorStatusCode.NOT_FOUND:
        console.error(`Not Found`);
        break;
      case ErrorStatusCode.INTERNAL:
        console.error(`Internal server error`);
        break;
      case ErrorStatusCode.SERVICE_UNAVAILABLE:
        console.error(`Service unavailable`);
        break;
      default:
        console.error(response.statusText);
    }

    throw error;
  }

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
