import { useCallback, useState } from 'react';
import api, { _TokenPassword } from '../Api/Authority';

type Data = {
  email?: string;
  password?: string;
};

const useLogin = () => {
  const [data, setData] = useState({} as Data);

  const login = useCallback(async () => {
    await api.post(`${_TokenPassword}`, data, undefined, 200);
  }, [data]);

  const setEmail = useCallback(
    (newEmail: string) => {
      const { email, ...rest } = data;
      setData({ email: newEmail, ...rest });
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
    login,
    setEmail,
    setPassword,
  };
};

export default useLogin;
