import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { _BaseUrl } from './Routes';

const client = axios.create({
  baseURL: _BaseUrl,
});

type CallAction<T> = (client: AxiosInstance) => Promise<AxiosResponse<T>>;

const call = async <T>(action: CallAction<T>, expectedStatus: number[]) => {
  try {
    const response = await action(client);
    if (expectedStatus.length > 0 && expectedStatus.includes(response.status))
      throw new Error(`Unexpected status ${response.status} - ${response.statusText}`);

    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig, ...expectedStatus: number[]) => {
  return call<T>((x) => x.post(url,data, config), expectedStatus);
};

const put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig, ...expectedStatus: number[]) => {
  return call<T>((x) => x.put(url,data, config), expectedStatus);
};

const patch = <T = any>(url: string, data?: any, config?: AxiosRequestConfig, ...expectedStatus: number[]) => {
  return call<T>((x) => x.patch(url,data, config), expectedStatus);
};

const get = <T = any>(url: string, config?: AxiosRequestConfig, ...expectedStatus: number[]) => {
  return call<T>((x) => x.get(url, config), expectedStatus);
};

const del = <T = any>(url: string, config?: AxiosRequestConfig, ...expectedStatus: number[]) => {
  return call<T>((x) => x.delete(url, config), expectedStatus);
};

export default {
  post,
  put,
  patch,
  get,
  delete: del,
};

export * from './Routes';
