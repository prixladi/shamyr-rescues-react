import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Form from '../../Layout/Form';
import { authService } from '../../Services';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { requiredText, tooShortText } from '../../Utils/Validation';
import Content from '../../Layout/Content';
import queryString from 'query-string';

const { PasswordInput, SubmitButton } = Form;

type Values = {
  password: string;
};

const schema = yup.object().shape({
  password: yup.string().min(6, tooShortText('Password', 6)).required(requiredText('Password')),
});

const PasswordReset: React.FC = () => {
  const { search } = useLocation();
  const history = useHistory();
  const query = useMemo(() => queryString.parse(search), [search]);

  const handleSubmit = async (values: Values) => {
    await authService.resetPassword(query.token as string, query.id as string, values.password, history);
  };

  return (
    <Content id="password-reset-page" hideFooter>
      <Form<Values> validationSchema={schema} initialValues={{ password: '' }} onSubmit={handleSubmit} title="Reset Password">
        <PasswordInput name="password" placeholder="New Password" required />
        <SubmitButton>
          Reset password <FontAwesomeIcon icon={faKey} />
        </SubmitButton>
      </Form>
    </Content>
  );
};

export default PasswordReset;
