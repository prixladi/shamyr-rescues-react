import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../Hooks';
import Form from '../../Layout/Form';
import { _ForgottenPassword, _Register } from '../../Routes';
import '../forms.css';

const { PasswordInput, EmailInput, SubmitButton } = Form;

const Login = () => {
  const { setEmail, setPassword, login } = useLogin();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login();
  };

  return (
    <>
      <Form title="Sign in" onSubmit={handleSubmit}>
        <EmailInput required onChange={(event) => setEmail(event.target.value)} />
        <PasswordInput required onChange={(event) => setPassword(event.target.value)} />
        <div className="options-01">
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          <Link to={_ForgottenPassword}>Forgot your password?</Link>
        </div>
        <SubmitButton value="Login" />
        <div className="options-02">
          <p>
            Not Registered? <Link to={_Register}>Create an Account</Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default Login;
