import { FormikHelpers } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../Layout/Form';
import { _ForgottenPassword, _Register } from '../../Routes';
import { authService } from '../../Services';
import * as yup from 'yup';
import '../forms.css';

const { PasswordInput, EmailInput, SubmitButton } = Form;

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
  password: yup.string().min(6, "Password must be at least 6 characters long.").required("Password is required."),
});

const Login = () => {
  const handleSubmit = async (values: Values, { setErrors }: FormikHelpers<Values>) => {
    const errors = await authService.login(values);
    if (errors) setErrors(errors);
  };

  return (
    <>
      <Form<Values> validationSchema={schema} initialValues={InitialValues} title="Sign in" onSubmit={handleSubmit}>
        <EmailInput required name="email" />
        <PasswordInput required name="password" />
        <div className="options-01">
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          <Link to={_ForgottenPassword}>Forgot your password?</Link>
        </div>
        <SubmitButton value="Login" />
        <div className="options-02">
            Not Registered? <Link to={_Register}>Create an Account</Link>
        </div>
      </Form>
    </>
  );
};

export default Login;
