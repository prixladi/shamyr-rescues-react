import { History } from 'history';
import { StatusCodes } from 'http-status-codes';
import { _Users } from '../Api';
import { apiClient, authorityManager } from '../clients';

const { OK } = StatusCodes;

const checkUser = async (history: History): Promise<boolean> => {
  const tokens = authorityManager.getTokens();
  const result = await apiClient.post(_Users, { token: tokens.bearerToken }, { history, expectedStatus: [OK] });
  return result?.status === OK ?? false;
};

export { checkUser };
