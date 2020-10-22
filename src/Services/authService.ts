import api, { _Emails, _PasswordReset, _TokenPassword, _Users } from '../Api/Authority';
import { NewUserModel, PasswordLoginModel } from '../Api/Authority/models';
import { AuthApiConfig } from '../Configs';

const register = async function (model: NewUserModel) {
  const result = await api.post(`${_Users}`, { ...model, clientId: AuthApiConfig.clientId }, 201, 409);

  if (result?.status === 409) {
    const message = result.data.Message as string;
    if (message.includes('email')) return { email: 'User with this email already exists.' };
    return { username: 'User with this username already exists.' };
  }
};

const login = async (model: PasswordLoginModel) => {
  const result = await api.post(`${_TokenPassword}`, model, 200, 400);

  if (result?.status !== 200)
    return {
      email: 'Invalid email or password',
      password: 'Invalid email or password',
    };
};

const sendForgottenPassword = async (email: string) => {
  const result = await api.patch(`${_Emails}/${email}/${_PasswordReset}`, { clientId: AuthApiConfig.clientId }, 200, 204);
  return result != null;
};

export { register, login, sendForgottenPassword };
