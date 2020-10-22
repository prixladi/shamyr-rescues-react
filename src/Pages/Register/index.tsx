import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { _SignIn } from '../../Navigation/Routes';
import Form from '../../Layout/Form';
import { FormikHelpers } from 'formik';
import { authService } from '../../Services';
import * as yup from 'yup';

const { PasswordInput, EmailInput, TextInput, SubmitButton, Options } = Form;

type Values = {
  username: string;
  email: string;
  password: string;
  givenName?: string;
  familyName?: string;
};

const InitialValues: Values = {
  username: '',
  email: '',
  password: '',
  givenName: undefined,
  familyName: undefined,
};

const schema = yup.object().shape({
  username: yup.string().min(6, 'Username must be at least 6 characters long.').required('Username is required.'),
  password: yup.string().min(6, 'Password must be at least 6 characters long.').required('Password is required.'),
  email: yup.string().email('Invalid email format.').required('Email is required.'),
  givenName: yup.string(),
  familyName: yup.string(),
});

const Register = () => {
  const history = useHistory();

  const handleSubmit = async (values: Values, { setErrors }: FormikHelpers<Values>) => {
    const errors = await authService.register(values, history);
    if (errors) setErrors(errors);
  };

  return (
    <Form<Values> validationSchema={schema} initialValues={InitialValues} onSubmit={handleSubmit} title="Register">
      <TextInput name="username" placeholder="Username" required />
      <EmailInput name="email" required />
      <TextInput name="givenName" placeholder="Given Name (Optional)" />
      <TextInput name="familyName" placeholder="Family Name (Optional)" />
      <PasswordInput name="password" required />
      <SubmitButton value="Register" />
      <Options>
        Already Registered? <Link to={_SignIn}>Sign In</Link>
      </Options>
    </Form>
  );
};

export default Register;
