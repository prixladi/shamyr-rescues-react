import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { _SignIn } from '../../Navigation/Routes';
import Form from '../../Layout/Form';
import { FormikHelpers, FormikValues } from 'formik';
import { authService } from '../../Services';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { requiredText, tooShortText } from '../../Utils/Validation';
import Content from '../../Layout/Content';
import { GoogleButton } from '../../Components';

const { PasswordInput, EmailInput, TextInput, SubmitButton, Options } = Form;

type Values = FormikValues & {
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
  username: yup.string().min(6, tooShortText('Username', 6)).required(requiredText('Username')),
  password: yup.string().min(6, tooShortText('Password', 6)).required(requiredText('Password')),
  email: yup.string().email('Invalid email format.').required(requiredText('Email')),
  givenName: yup.string(),
  familyName: yup.string(),
});

const Register: React.FC = () => {
  const history = useHistory();

  const handleSubmit = async (values: Values, { setErrors }: FormikHelpers<Values>) => {
    const errors = await authService.register(values, history);
    if (errors) {
      setErrors(errors);
    }
  };

  return (
    <Content id="register-page" hideFooter>
      <Form<Values> validationSchema={schema} initialValues={InitialValues} onSubmit={handleSubmit} title="Register">
        <TextInput name="username" placeholder="Username" required />
        <EmailInput name="email" required />
        <TextInput name="givenName" placeholder="Given Name (Optional)" />
        <TextInput name="familyName" placeholder="Family Name (Optional)" />
        <PasswordInput name="password" required />
        <SubmitButton>
          Register <FontAwesomeIcon icon={faUser} />
        </SubmitButton>
        <GoogleButton buttonText="Login with Google" />
        <Options>
          Already Registered? <Link to={_SignIn}>Sign In</Link>
        </Options>
      </Form>
    </Content>
  );
};

export default Register;
