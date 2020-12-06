import axios from 'axios';
import { _BaseUrl } from './Routes';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { History } from 'history';
import { _SignIn } from '../Navigation/Routes';
import { StatusCodes } from 'http-status-codes';
import { notificationService } from '../Services';
import { Manager } from '../Authority';

type Client = {
  post: <T = unknown>(url: string, data: unknown, options: Options) => Promise<AxiosResponse<T> | null>;
  put: <T = unknown>(url: string, data: unknown, options: Options) => Promise<AxiosResponse<T> | null>;
  patch: <T = unknown>(url: string, data: unknown, options: Options) => Promise<AxiosResponse<T> | null>;
  get: <T = unknown>(url: string, options: Options) => Promise<AxiosResponse<T> | null>;
  delete: <T = unknown>(url: string, options: Options) => Promise<AxiosResponse<T> | null>;
};

type Options = AxiosRequestConfig & {
  expectedStatus: number[];
  history: History;
  shouldAuth?: boolean;
};

type CallAction<T> = (client: AxiosInstance, config: AxiosRequestConfig) => Promise<AxiosResponse<T>>;

const { OK, MULTIPLE_CHOICES, UNAUTHORIZED } = StatusCodes;

const client = axios.create({
  baseURL: _BaseUrl,
});

const getHeaders = (options: Options) => {
  if (options.shouldAuth) {
    return {
      Authorization: `Bearer ${localStorage.getItem('bearerToken')}`,
    };
  }

  return {};
};

const validateStatus = (options: Options) => (status: number) => {
  if (status === UNAUTHORIZED) {
    return true;
  } else if (options.expectedStatus.length === 0) {
    return status >= OK && status < MULTIPLE_CHOICES;
  }
  return options.expectedStatus.includes(status);
};

const createCallbacks = (history: History) => ({
  onUnauthorized: () => {
    history.push(_SignIn);
    return Promise.resolve();
  },
  onError: (err: unknown) => {
    console.error(err);
    notificationService.serverError();
    return Promise.resolve();
  },
});

const createClient = (manager: Manager): Client => {
  const call = async <T>(action: CallAction<T>, options: Options) => {
    try {
      const config: AxiosRequestConfig = {
        validateStatus: validateStatus(options),
        ...options,
      };

      const response = await action(client, { ...config, headers: getHeaders(options) });

      if (response.status === UNAUTHORIZED) {
        if (await manager.refreshToken(createCallbacks(options.history))) {
          return await action(client, { ...config, headers: getHeaders(options) });
        } else {
          options.history.push(_SignIn);
          return null;
        }
      }

      return response;
    } catch (err) {
      console.error(err);
      notificationService.serverError();
      return null;
    }
  };

  return {
    post: <T = unknown>(url: string, data: unknown, options: Options) => {
      return call<T>((axios, config) => axios.post(url, data, config), options);
    },
    put: <T = unknown>(url: string, data: unknown, options: Options) => {
      return call<T>((axios, config) => axios.put(url, data, config), options);
    },
    patch: <T = unknown>(url: string, data: unknown, options: Options) => {
      return call<T>((axios, config) => axios.patch(url, data, config), options);
    },
    get: <T = unknown>(url: string, options: Options) => {
      return call<T>((axios, config) => axios.get(url, config), options);
    },
    delete: <T = unknown>(url: string, options: Options) => {
      return call<T>((axios, config) => axios.delete(url, config), options);
    },
  };
};

export default createClient;
export * from './Routes';
export * from './Models';
