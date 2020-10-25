import api, { _Emails, _PasswordReset, _TokenGoogle, _TokenPassword, _Users } from '../Api/Authority';
import { GoogleLoginModel, NewUserModel, PasswordLoginModel, TokensModel } from '../Api/Authority/models';
import { History } from 'history';
import { AuthApiConfig } from '../Configs';
import { _Profile, _SignIn } from '../Navigation/Routes';
import { setTokens, unsetTokens } from '../Utils';

const register = async function (model: NewUserModel, history: History) {
  const result = await api.post(`${_Users}`, { ...model, clientId: AuthApiConfig.clientId }, { history, expectedStatus: [201, 409] });

  if (result?.status === 409) {
    const message = result.data.Message as string;
    if (message.includes('email')) return { email: 'User with this email already exists.' };

    return { username: 'User with this username already exists.' };
  }

  if (result) history.push(_SignIn);
};

const passwordLogin = async (model: PasswordLoginModel, history: History) => {
  const result = await api.post<TokensModel>(`${_TokenPassword}`, model, { history, expectedStatus: [200, 400] });

  if (result && result.status !== 200)
    return {
      email: 'Invalid email or password',
      password: 'Invalid email or password',
    };

  if (result) {
    setTokens(result.data);
    history.push(_Profile);
  }
};

const googleLogin = async (model: GoogleLoginModel, history: History) => {
  const result = await api.post<TokensModel>(`${_TokenGoogle}`, model, { history, expectedStatus: [200] });

  if (result) {
    setTokens(result.data);
    history.push(_Profile);
  }
};

const logout = (history: History) => {
  unsetTokens();
  history.push(_SignIn);

  return Promise.resolve();
};

const sendForgottenPassword = async (email: string, history: History) => {
  const result = await api.patch(
    `${_Emails}/${email}/${_PasswordReset}`,
    { clientId: AuthApiConfig.clientId },
    { history, expectedStatus: [200, 204] }
  );

  return result != null;
};

const getTokens = () => {
  return {
    bearerToken: localStorage.getItem('bearerToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  };
};

export { register, passwordLogin, googleLogin, logout, sendForgottenPassword, getTokens };
