import jwt_decode from 'jwt-decode';
import { TokensModel } from '../Api/Authority/models';

type UserProfile = {
  id: string;
  email: string;
  username: string;
  givenName?: string;
  familyName?: string;
};

const idClaim = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name';
const usernameClaim = 'http://schemas.xmlsoap.org/ws/2009/09/identity/claims/actor';
const emailClaim = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress';
const givenNameClaim = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname';
const familyNameClaim = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname';

const getUserProfile = (): UserProfile | null => {
  const bearerToken = localStorage.getItem('bearerToken');
  if (!bearerToken) return null;

  const token = jwt_decode(bearerToken) as { [claim: string]: string };

  return {
    id: token[idClaim],
    email: token[emailClaim],
    username: token[usernameClaim],
    givenName: token[givenNameClaim],
    familyName: token[familyNameClaim],
  };
};

const isUserLoggedIn = () => localStorage.getItem('bearerToken') !== null;

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

export { getUserProfile, isUserLoggedIn, getBearerToken, getRefreshToken, setTokens, unsetTokens };
