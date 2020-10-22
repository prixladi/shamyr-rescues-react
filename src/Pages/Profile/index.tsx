import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../../Layout';
import { authService } from '../../Services';
import { getUserProfile } from '../../Utils';
import './index.css';

const { SubmitButton } = Form;

const Profile = () => {
  const [user] = useState(getUserProfile());
  const history = useHistory();

  if (!user) {
    authService.logout(history);
    return null;
  }

  return (
    <>
      <h1 className="center">User's Profile</h1>
      <p className="center">
        <span>{user.username}</span>
        <br />
        <span>{user.email}</span>
      </p>
      <Form initialValues={{}} onSubmit={() => authService.logout(history)}>
        <SubmitButton value="Logout" />
      </Form>
    </>
  );
};

export default Profile;
