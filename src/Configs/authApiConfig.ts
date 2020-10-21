declare const config: {
  apiUrl: string;
  authApiUrl: string;
  authApiClientId: string;
};

export default {
  url: config.authApiUrl,
  clientId: config.authApiClientId,
};
