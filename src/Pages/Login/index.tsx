import { FormikHelpers } from 'formik';
import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from '../../Layout/Form';
import { _ForgottenPassword, _Register } from '../../Navigation/Routes';
import { authService } from '../../Services';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import GoogleLogin from './GoogleLogin';
import './index.css';
import { requiredText, tooShortText } from '../../Utils/Validation';

const { PasswordInput, EmailInput, SubmitButton, Options } = Form;

type Values = {
  email: string;
  password: string;
};

const InitialValues: Values = {
  email: '',
  password: '',
};

const schema = yup.object().shape<Values>({
  email: yup.string().email('Invalid email format.').required(requiredText('Email')),
  password: yup.string().min(6, tooShortText('Password', 6)).required(requiredText('Password')),
});

const Login = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async (values: Values, { setErrors }: FormikHelpers<Values>) => {
      const errors = await authService.passwordLogin(values, history);

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
        <SubmitButton>
          Login with Email <FontAwesomeIcon icon={faEnvelope} />
        </SubmitButton>
        <GoogleLogin />
        <Options>
          Not Registered? <Link to={_Register}>Create an Account</Link>
        </Options>
      </Form>
    </div>
  );
};

export default Login;
