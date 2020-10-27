import React from 'react';
import { Link } from 'react-router-dom';
import { NarrowContent } from '../../Components';
import { _Home, _SignIn } from '../../Navigation/Routes';

const AccountVerify = () => (
  <div id="account-verify-page">
    <NarrowContent>
      <h1>Email Sent</h1>
      <p>
        Email with verification link has been sent to your email. You can go back to <Link to={_SignIn}> Sign-in </Link> page or back to{' '}
        <Link to={_Home}>Home</Link> page.
      </p>
    </NarrowContent>
  </div>
);

export default AccountVerify;
