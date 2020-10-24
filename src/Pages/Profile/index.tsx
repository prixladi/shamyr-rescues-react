import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../../Layout';
import { authService } from '../../Services';
import { getUserProfile } from '../../Utils';
import UserPlaces from './UserPlaces';
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
    <div id="profile-page">
      <div className="profile-data">
        <h1>
          User's Profile
        </h1>
        <p>
          <span>{user.username}</span>
          <br />
          <span>{user.email}</span>
        </p>
        <Form initialValues={{}} onSubmit={() => authService.logout(history)}>
          <SubmitButton value="Logout" />
        </Form>
      </div>
      <div className="user-places">
        <UserPlaces />
      </div>
    </div>
  );
};

export default Profile;
