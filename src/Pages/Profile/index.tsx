import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../../Layout';
import { authService } from '../../Services';
import { getUserProfile } from '../../Utils';
import UserPlaces from './UserPlaces';
import './index.css';
import Content from '../../Layout/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const { SubmitButton } = Form;

const Profile = () => {
  const [user] = useState(getUserProfile());
  const history = useHistory();

  if (!user) {
    authService.logout(history);
    return null;
  }

  return (
    <Content id="profile-page" hideFooter>
      <div className="profile-data">
        <h1>User's Profile</h1>
        <p>
          {user.username && (
            <>
              <span>{user.username}</span>
              <br />
            </>
          )}
          <span>{user.email}</span>
        </p>
        <Form initialValues={{}} onSubmit={() => authService.logout(history)}>
          <SubmitButton>
            Logout <FontAwesomeIcon icon={faSignOutAlt} />
          </SubmitButton>
        </Form>
      </div>
      <div className="user-places">
        <UserPlaces userId={user.id} />
      </div>
    </Content>
  );
};

export default Profile;
