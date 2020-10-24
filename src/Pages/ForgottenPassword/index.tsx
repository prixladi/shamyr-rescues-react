import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { _SignIn } from '../../Navigation/Routes';
import Form from '../../Layout/Form';
import { authService } from '../../Services';
import * as yup from 'yup';

const { EmailInput, SubmitButton, Options } = Form;

type Values = {
  email: string;
};

const InitialValues: Values = {
  email: '',
};

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format.').required('Email is required.'),
});

const ForgottenPassword = () => {
  const history = useHistory();

  const handleSubmit = async (values: Values) => {
    await authService.sendForgottenPassword(values.email, history);
  };

  return (
    <div id="forgotten-password-page">
      <Form<Values> validationSchema={schema} initialValues={InitialValues} onSubmit={handleSubmit} title="Forgotten password">
        <EmailInput name="email" placeholder="Email Address" required />
        <SubmitButton value="Send" />
        <Options>
          Remebered? <Link to={_SignIn}>Sign in</Link>
        </Options>
      </Form>
    </div>
  );
};

export default ForgottenPassword;
