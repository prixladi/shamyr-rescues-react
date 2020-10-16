import { useCallback, useState } from 'react';
import api, { _Emails, _PasswordReset } from '../Api/Authority';

const useForgottenPassword = () => {
  const [email, setEmail] = useState('');

  const send = useCallback(async () => {
    try {
      await api.patch(`${_Emails}/${email}/${_PasswordReset}`);
    } catch (err) {
      console.log(err);
    }
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
