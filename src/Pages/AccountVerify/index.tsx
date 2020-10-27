import React from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { _AccountVerifySent, _SignIn } from '../../Navigation/Routes';
import Form from '../../Layout/Form';
import { authService } from '../../Services';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { requiredText } from '../../Utils/Validation';
import Content from '../../Layout/Content';
import { FormikHelpers } from 'formik';

const { EmailInput, SubmitButton, Options } = Form;

type Values = {
  email: string;
};

type State = {
  User: { Email: string };
};

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format.').required(requiredText('email')),
});

const ForgottenPassword = () => {
  const history = useHistory();
  const { state } = useLocation<State>();

  const handleSubmit = async (values: Values, { setErrors }: FormikHelpers<Values>) => {
    const result = await authService.sendAccountVerification(values.email, history);
    if (result) {
      setErrors(result);
    } else {
      history.push(_AccountVerifySent);
    }
  };

  if (!state || !state.User) {
    return <Redirect to={_SignIn} />;
  }

  return (
    <Content id="account-verify-page" hideFooter>
      <Form<Values> validationSchema={schema} initialValues={{ email: state.User.Email }} onSubmit={handleSubmit} title="Account verify">
        <EmailInput name="email" placeholder="Email Address" required />
        <Options>You need to verify your account first, check your email or press button below to resend verification email.</Options>
        <SubmitButton>
          Send <FontAwesomeIcon icon={faEnvelope} />
        </SubmitButton>
        <Options>
          Already verified? <Link to={_SignIn}>Sign in</Link>
        </Options>
      </Form>
    </Content>
  );
};

export default ForgottenPassword;
