import { useCallback, useState } from 'react';
import api, { _Users } from '../Api/Authority';
import { AuthApiConfig } from '../Configs';

type data = {
  username?: string;
  email?: string;
  givenName?: string;
  familyName?: string;
  password?: string;
  clientId: string;
};

const useRegister = () => {
  const [data, setData] = useState({ clientId: AuthApiConfig.clientId } as data);

  const register = useCallback(async () => {
      await api.post(`${_Users}`, data, undefined, 201);
  }, [data]);

  const setUsername = useCallback(
    (newUsername: string) => {
      const { username, ...rest } = data;
      setData({ username: newUsername, ...rest });
    },
    [data, setData]
  );

  const setEmail = useCallback(
    (newEmail: string) => {
      const { email, ...rest } = data;
      setData({ email: newEmail, ...rest });
    },
    [data, setData]
  );

  const setGivenName = useCallback(
    (newGivenName: string) => {
      const { givenName, ...rest } = data;
      setData({ givenName: newGivenName, ...rest });
    },
    [data, setData]
  );

  const setFamilyName = useCallback(
    (newFamilyName: string) => {
      const { familyName, ...rest } = data;
      setData({ familyName: newFamilyName, ...rest });
    },
    [data, setData]
  );

  const setPassword = useCallback(
    (newPassword: string) => {
      const { password, ...rest } = data;
      setData({ password: newPassword, ...rest });
    },
    [data, setData]
  );

  return {
    register,
    setUsername,
    setEmail,
    setGivenName,
    setFamilyName,
    setPassword,
  };
};

export default useRegister;