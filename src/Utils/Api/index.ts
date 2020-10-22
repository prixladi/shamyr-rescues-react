import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getRefreshToken, setTokens, unsetTokens } from '..';
import { TokensModel } from '../../Api/Authority/models';
import { _TokenRefresh } from '../../Api/Authority/Routes';
import { History } from 'history';
import { _SignIn } from '../../Navigation/Routes';

type Options =  AxiosRequestConfig & {
  expectedStatus: number[];
  history: History;
  auth?: boolean;
};

type CallAction<T> = (client: AxiosInstance, config: AxiosRequestConfig) => Promise<AxiosResponse<T>>;

const methods = (client: AxiosInstance) => {
  const getHeaders = (options: Options) => {
    if (options.auth)
      return {
        authorization: `Bearer ${localStorage.getItem('bearerToken')}`,
      };

    return {};
  };

  const validateStatus = (options: Options) => (status: number) => {
    if (status === 401) return true;
    else if (options.expectedStatus.length === 0) return status >= 200 && status < 300;
    return options.expectedStatus.includes(status);
  };

  const tryRefreshToken = async () => {
    const token = getRefreshToken();
    if (!token) return false;

    try {
      const response = await client.post<TokensModel>(_TokenRefresh, { refreshToken: token });
      setTokens(response.data);
      return true;
    } catch (err) {
      console.error(err);
      unsetTokens();
      return false;
    }
  };

  const call = async <T>(action: CallAction<T>, options: Options) => {
    try {
      const config: AxiosRequestConfig = {
        validateStatus: validateStatus(options),
        headers: getHeaders(options),
        ...options
      };

      let response = await action(client, config);

      if (response.status === 401) {
        if (tryRefreshToken()) return await action(client, config);
        else options.history.push(_SignIn);
      }

      return response;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  return {
    post: <T = any>(url: string, data: any, options: Options) => {
      return call<T>((axios, config) => axios.post(url, data, config), options);
    },
    put: <T = any>(url: string, data: any, options: Options) => {
      return call<T>((axios, config) => axios.put(url, data, config), options);
    },
    patch: <T = any>(url: string, data: any, options: Options) => {
      return call<T>((axios, config) => axios.patch(url, data, config), options);
    },
    get: <T = any>(url: string, options: Options) => {
      return call<T>((axios, config) => axios.get(url, config), options);
    },
    delete: <T = any>(url: string, options: Options) => {
      return call<T>((axios, config) => axios.delete(url, config), options);
    },
  };
};

export default methods;
