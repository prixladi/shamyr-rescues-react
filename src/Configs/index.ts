import ApiConfig from './apiConfig';
import AuthApiConfig from './authApiConfig';
import GoogleConfig from './googleConfig';

declare global {
  interface Window {
    config: {
      apiUrl: string;
      authApiUrl: string;
      authApiClientId: string;
      googleClientId: string;
    };
  }
}

export { ApiConfig, AuthApiConfig, GoogleConfig };
