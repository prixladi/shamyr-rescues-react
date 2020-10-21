import { useCallback, useState } from 'react';
import api, { _Emails, _PasswordReset } from '../Api/Authority';
import { AuthApiConfig } from '../Configs';

const useForgottenPassword = () => {
  const [email, setEmail] = useState('');

  const send = useCallback(async () => {
    await api.patch(`${_Emails}/${email}/${_PasswordReset}`, { clientId: AuthApiConfig.clientId }, undefined, 200, 204);
  }, [email]);

  const setEmailCallback = useCallback(
    (newEmail: string) => {
      setEmail(newEmail);
    },
    [setEmail]
  );

  return {
    send,
    setEmail: setEmailCallback,
  };
};

export default useForgottenPassword;
