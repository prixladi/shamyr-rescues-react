import React from 'react';
import { Link } from 'react-router-dom';
import { NarrowContent } from '../../Components';
import Content from '../../Layout/Content';
import { _Home, _SignIn } from '../../Navigation/Routes';

const ForgottenPasswordSent: React.FC = () => (
  <Content id="forgotten-password-sent-page" hideFooter>
    <NarrowContent>
      <h1>Email Sent</h1>
      <p>
        Password reset email has been sent to your email. You can go back to <Link to={_SignIn}> Sign-in </Link> page or back to{' '}
        <Link to={_Home}>Home</Link> page.
      </p>
    </NarrowContent>
  </Content>
);

export default ForgottenPasswordSent;
