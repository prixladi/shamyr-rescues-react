import api, { _Emails, _PasswordReset, _TokenGoogle, _TokenPassword, _Users, _Verification, _Verified } from '../Api/Authority';
import { EmailNotVerifiedModel, GoogleLoginModel, NewUserModel, PasswordLoginModel, TokensModel } from '../Api/Authority/models';
import { History } from 'history';
import { AuthApiConfig } from '../Configs';
import { _AccountVerify, _Profile, _SignIn } from '../Navigation/Routes';
import { setTokens, unsetTokens } from '../Utils';
import { StatusCodes } from 'http-status-codes';

const { OK, CREATED, NO_CONTENT, BAD_REQUEST, NOT_FOUND, CONFLICT } = StatusCodes;
const EMAIL_NOT_VERIFIED = 430;

const register = async function (model: NewUserModel, history: History) {
  const result = await api.post(
    `${_Users}`,
    { ...model, clientId: AuthApiConfig.clientId },
    { history, expectedStatus: [CREATED, CONFLICT] }
  );

  if (result?.status === CONFLICT) {
    const message = result.data.Message as string;
    if (message.includes('email')) return { email: 'User with this email already exists.' };

    return { username: 'User with this username already exists.' };
  }

  if (result) {
    history.push(_AccountVerify, { email: model.email });
  }
};

const passwordLogin = async (model: PasswordLoginModel, history: History) => {
  const result = await api.post<TokensModel | EmailNotVerifiedModel>(`${_TokenPassword}`, model, {
    history,
    expectedStatus: [OK, BAD_REQUEST, EMAIL_NOT_VERIFIED],
  });

  if (result && result.status === EMAIL_NOT_VERIFIED) {
    history.push(_AccountVerify, { email: (result.data as EmailNotVerifiedModel).User.Email });
  } else if (result && result.status !== OK) {
    return {
      email: 'Invalid email or password.',
      password: 'Invalid email or password.',
    };
  } else if (result) {
    setTokens(result.data as TokensModel);
    history.push(_Profile);
  }
};

const googleLogin = async (model: GoogleLoginModel, history: History) => {
  const result = await api.post<TokensModel>(`${_TokenGoogle}`, model, { history, expectedStatus: [OK] });

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
    { history, expectedStatus: [OK, NO_CONTENT] }
  );

  return result != null;
};

const sendAccountVerification = async (email: string, history: History) => {
  const result = await api.patch(
    `${_Emails}/${email}/${_Verification}`,
    { clientId: AuthApiConfig.clientId },
    { history, expectedStatus: [OK, NO_CONTENT, NOT_FOUND, CONFLICT] }
  );

  if (result?.status === CONFLICT)
    return {
      email: 'Account with this email has already been verified.',
    };

  if (result?.status === NOT_FOUND)
    return {
      email: "Account with this email does't exist.",
    };
};

const verifyAccount = async (email: string, token: string, history: History) => {
  const result = await api.put(
    `${_Emails}/${email}/${_Verified}`,
    { token },
    { history, expectedStatus: [OK, NO_CONTENT, BAD_REQUEST, NOT_FOUND, CONFLICT] }
  );

  return result?.status;
};

const getTokens = () => {
  return {
    bearerToken: localStorage.getItem('bearerToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  };
};

export { register, passwordLogin, googleLogin, logout, sendForgottenPassword, sendAccountVerification, getTokens, verifyAccount };
