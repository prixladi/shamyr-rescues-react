import React from 'react';
import { Link } from 'react-router-dom';
import { _SignIn } from '../../Routes';
import Form from '../../Layout/Form';
import '../forms.css';
import { authService } from '../../Services';
import * as yup from 'yup';

const { EmailInput, SubmitButton } = Form;

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
  const handleSubmit = async (values: Values) => {
    await authService.sendForgottenPassword(values.email);
  };

  return (
    <Form<Values> validationSchema={schema} initialValues={InitialValues} onSubmit={handleSubmit} title="Forgotten password">
      <EmailInput name="email" placeholder="Email Address" required />
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
