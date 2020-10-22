import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { _BaseUrl } from './Routes';

const client = axios.create({
  baseURL: _BaseUrl
});

type CallAction<T> = (client: AxiosInstance, config: AxiosRequestConfig) => Promise<AxiosResponse<T>>;

const call = async <T>(action: CallAction<T>, expectedStatus: number[]) => {
  try {
    const config = {
      validateStatus: (status: number) => {
        if (expectedStatus.length === 0) return status >= 200 && status < 300;
        return expectedStatus.includes(status);
      },
    };

    const response = await action(client, config);
    return response;
  } catch (err) {
    return null;
  }
};

const post = <T = any>(url: string, data?: any, ...expectedStatus: number[]) => {
  return call<T>((axios, config) => axios.post(url, data, config), expectedStatus);
};

const put = <T = any>(url: string, data?: any, ...expectedStatus: number[]) => {
  return call<T>((axios, config) => axios.put(url, data, config), expectedStatus);
};

const patch = <T = any>(url: string, data?: any, ...expectedStatus: number[]) => {
  return call<T>((axios, config) => axios.patch(url, data, config), expectedStatus);
};

const get = <T = any>(url: string, ...expectedStatus: number[]) => {
  return call<T>((axios, config) => axios.get(url, config), expectedStatus);
};

const del = <T = any>(url: string, ...expectedStatus: number[]) => {
  return call<T>((axios, config) => axios.delete(url, config), expectedStatus);
};

export default {
  post,
  put,
  patch,
  get,
  delete: del,
};

export * from './Routes';
