import { useCallback, useState } from 'react';
import api, { _TokenPassword } from '../Api/Authority';

type data = {
  email?: string;
  password?: string;
};

const useLogin = () => {
  const [data, setData] = useState({} as data);

  const login = useCallback(async () => {
    try {
      await api.post(`${_TokenPassword}`, data);
    } catch (err) {
      console.log(err);
    }
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
