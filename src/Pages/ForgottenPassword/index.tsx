import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { _ForgottenPasswordSent, _SignIn } from '../../Navigation/Routes';
import Form from '../../Layout/Form';
import { authService } from '../../Services';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { requiredText } from '../../Utils/Validation';
import Content from '../../Layout/Content';
import { FormikValues } from 'formik';

const { EmailInput, SubmitButton, Options } = Form;

type Values = FormikValues & {
  email: string;
};

const InitialValues: Values = {
  email: '',
};

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format.').required(requiredText('email')),
});

const ForgottenPassword: React.FC = () => {
  const history = useHistory();

  const handleSubmit = async (values: Values) => {
    if (await authService.sendForgottenPassword(values.email, history)) {
      history.push(_ForgottenPasswordSent);
    }
  };

  return (
    <Content id="forgotten-password-page" hideFooter>
      <Form<Values> validationSchema={schema} initialValues={InitialValues} onSubmit={handleSubmit} title="Forgotten Password">
        <EmailInput name="email" placeholder="Email Address" required />
        <SubmitButton>
          Send <FontAwesomeIcon icon={faEnvelope} />
        </SubmitButton>
        <Options>
          Remebered? <Link to={_SignIn}>Sign in</Link>
        </Options>
      </Form>
    </Content>
  );
};

export default ForgottenPassword;
