import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useForgottenPassword } from '../../Hooks';
import { _SignIn } from '../../Routes';
import Form from '../../Layout/Form';
import '../forms.css';

const { EmailInput, SubmitButton } = Form;

const ForgottenPassword = () => {
  const { setEmail, send } = useForgottenPassword();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await send();
  };

  return (
    <Form onSubmit={handleSubmit} title="Forgotten password">
      <EmailInput onChange={(event) => setEmail(event.target.value)} placeholder="Email Address" required />
      <SubmitButton value="Send" />
      <div className="options-02">
        <p>
          Remebered? <Link to={_SignIn}>Sign in</Link>
        </p>
      </div>
    </Form>
  );
};

export default ForgottenPassword;
