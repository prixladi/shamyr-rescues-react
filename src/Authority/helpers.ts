import { TokensModel } from './models';

const getBearerToken = () => localStorage.getItem('bearerToken');

const getRefreshToken = () => localStorage.getItem('refreshToken');

const setTokens = (tokens: TokensModel) => {
  localStorage.setItem('refreshToken', tokens.refreshToken);
  localStorage.setItem('bearerToken', tokens.bearerToken);
};

const unsetTokens = () => {
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('bearerToken');
};

function pathJoin(...parts: string[]) {
  var replace = new RegExp(`/{1,}`, 'g');
  return parts.join('/').replace(replace, '/').replace(':/', '://');
}

export { getBearerToken, getRefreshToken, setTokens, unsetTokens, pathJoin };
