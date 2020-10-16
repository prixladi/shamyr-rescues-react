import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useRegister } from '../../Hooks';
import { _SignIn } from '../../Routes';
import Form from '../../Layout/Form';
import '../forms.css';

const { PasswordInput, EmailInput, TextInput, SubmitButton } = Form;

const Register = () => {
  const { register, setEmail, setFamilyName, setGivenName, setPassword, setUsername } = useRegister();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await register();
  };

  return (
    <Form onSubmit={handleSubmit} title="Register">
      <TextInput onChange={(event) => setUsername(event.target.value)} placeholder="Username" required />
      <EmailInput onChange={(event) => setEmail(event.target.value)} required />
      <TextInput onChange={(event) => setGivenName(event.target.value)} placeholder="Given Name (Optional)" />
      <TextInput onChange={(event) => setFamilyName(event.target.value)} placeholder="Family Name (Optional)" />
      <PasswordInput onChange={(event) => setPassword(event.target.value)} required />
      <SubmitButton value="Register" />
      <div className="options-02">
        <p>
          Already Registered? <Link to={_SignIn}>Sign In</Link>
        </p>
      </div>
    </Form>
  );
};

export default Register;
