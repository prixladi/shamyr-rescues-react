import { FormikHelpers } from 'formik';
import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from '../../Layout/Form';
import { _ForgottenPassword, _Register } from '../../Navigation/Routes';
import { authService } from '../../Services';
import * as yup from 'yup';
import './index.css';

const { PasswordInput, EmailInput, SubmitButton, Options } = Form;

type Values = {
  email: string;
  password: string;
};

const InitialValues: Values = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format.').required('Email is required.'),
  password: yup.string().min(6, 'Password must be at least 6 characters long.').required('Password is required.'),
});

const Login = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async (values: Values, { setErrors }: FormikHelpers<Values>) => {
      const errors = await authService.login(values, history);

      if (errors) setErrors(errors);
    },
    [history]
  );

  return (
    <div id="login-page">
      <Form<Values> validationSchema={schema} initialValues={InitialValues} title="Sign in" onSubmit={handleSubmit}>
        <EmailInput required name="email" />
        <PasswordInput required name="password" />
        <Options>
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          <Link className="right" to={_ForgottenPassword}>
            Forgot your password?
          </Link>
        </Options>
        <SubmitButton value="Login" />
        <Options>
          Not Registered? <Link to={_Register}>Create an Account</Link>
        </Options>
      </Form>
    </div>
  );
};

export default Login;
