import { EmailNotVerifiedModel, GoogleLoginModel, NewUserModel, PasswordLoginModel } from '../Authority';
import { History } from 'history';
import { _AccountVerify, _Profile, _SignIn } from '../Navigation/Routes';
import { StatusCodes } from 'http-status-codes';
import * as notificationService from './notificationService';
import { ErrorModel } from '../Authority/models';
import { authorityManager } from '../clients';

type Callbacks = {
  onUnauthorized: () => Promise<void>;
  onError: (err: unknown) => Promise<void>;
};

type RegisterError = {
  username?: string;
  email?: string;
};

type LoginError = {
  email?: string;
  password?: string;
};

type EmailError = {
  email?: string;
};

const { NOT_FOUND, CONFLICT } = StatusCodes;
const EMAIL_NOT_VERIFIED = 430;

const createCallbacks = (history: History): Callbacks => ({
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

const register = async function (model: NewUserModel, history: History): Promise<RegisterError | undefined> {
  const result = await authorityManager.register(model, createCallbacks(history));

  if (result.status === CONFLICT) {
    const data = result.data as ErrorModel;
    if (data.message.includes('email')) {
      return { email: 'User with this email already exists.' };
    }

    return { username: 'User with this username already exists.' };
  }

  if (result.ok) {
    history.push(_AccountVerify, { email: model.email });
  }
};

const passwordLogin = async (model: PasswordLoginModel, history: History): Promise<LoginError | undefined> => {
  const result = await authorityManager.passwordLogin(model, createCallbacks(history));

  if (result.status === EMAIL_NOT_VERIFIED) {
    history.push(_AccountVerify, { email: (result.data as EmailNotVerifiedModel).user.email });
  } else if (!result.ok) {
    return {
      email: 'Invalid email or password.',
      password: 'Invalid email or password.',
    };
  } else {
    history.push(_Profile);
  }
};

const googleLogin = async (model: GoogleLoginModel, history: History): Promise<void> => {
  const result = await authorityManager.googleLogin(model, createCallbacks(history));

  if (result.ok) {
    history.push(_Profile);
  }
};

const sendForgottenPassword = async (email: string, history: History): Promise<boolean> => {
  const result = await authorityManager.sendForgottenPassword(email, createCallbacks(history));

  return result.ok;
};

const resetPassword = async (passwordToken: string, id: string, password: string, history: History): Promise<void> => {
  const result = await authorityManager.resetPassword(passwordToken, id, password, createCallbacks(history));

  if (result.ok) {
    history.push(_SignIn);
  } else if (result.status === CONFLICT) {
    notificationService.createNotification({
      title: 'Password reset not requested',
      message: 'First you need to reqest password reset befor reseting.',
      type: 'danger',
    });
  } else {
    notificationService.createNotification({
      title: 'Invalid Request',
      message: 'Password reset request is invalid.',
      type: 'danger',
    });
  }
};

const sendAccountVerification = async (email: string, history: History): Promise<EmailError | undefined> => {
  const result = await authorityManager.sendAccountVerification(email, createCallbacks(history));

  if (result.status === CONFLICT) {
    return {
      email: 'Account with this email has already been verified.',
    };
  }

  if (result.status === NOT_FOUND) {
    return {
      email: "Account with this email does't exist.",
    };
  }
};

const verifyAccount = async (email: string, token: string, history: History): Promise<number | undefined> => {
  const result = await authorityManager.verifyAccount(email, token, createCallbacks(history));

  return result?.status;
};

const logout = async (history: History): Promise<void> => {
  await authorityManager.logout();
  history.push(_SignIn);
};

export { register, passwordLogin, googleLogin, logout, sendForgottenPassword, resetPassword, sendAccountVerification, verifyAccount };
