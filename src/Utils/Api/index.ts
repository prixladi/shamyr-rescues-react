import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getRefreshToken, setTokens, unsetTokens } from '..';
import { TokensModel } from '../../Api/Authority/models';
import { _TokenRefresh } from '../../Api/Authority/Routes';
import { History } from 'history';
import { _SignIn } from '../../Navigation/Routes';
import { StatusCodes } from 'http-status-codes';
import { notificationService } from '../../Services';

const { OK, MULTIPLE_CHOICES, UNAUTHORIZED } = StatusCodes;

type Options = AxiosRequestConfig & {
  expectedStatus: number[];
  history: History;
  shouldAuth?: boolean;
};

type CallAction<T> = (client: AxiosInstance, config: AxiosRequestConfig) => Promise<AxiosResponse<T>>;

const methods = (client: AxiosInstance, authClient: AxiosInstance) => {
  const getHeaders = (options: Options) => {
    if (options.shouldAuth)
      return {
        Authorization: `Bearer ${localStorage.getItem('bearerToken')}`,
      };

    return {};
  };

  const validateStatus = (options: Options) => (status: number) => {
    if (status === UNAUTHORIZED) return true;
    else if (options.expectedStatus.length === 0) return status >= OK && status < MULTIPLE_CHOICES;
    return options.expectedStatus.includes(status);
  };

  const tryRefreshToken = async () => {
    const token = getRefreshToken();
    if (!token) return false;

    try {
      const response = await authClient.post<TokensModel>(_TokenRefresh, { refreshToken: token });
      setTokens(response.data);
      return true;
    } catch (err) {
      console.error(err);
      notificationService.serverError();
      unsetTokens();
      return false;
    }
  };

  const call = async <T>(action: CallAction<T>, options: Options) => {
    try {
      const config: AxiosRequestConfig = {
        validateStatus: validateStatus(options),
        headers: getHeaders(options),
        ...options,
      };

      let response = await action(client, config);

      if (response.status === UNAUTHORIZED) {
        if (tryRefreshToken()) {
          return await action(client, config);
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
