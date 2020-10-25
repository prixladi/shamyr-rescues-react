import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../../Layout/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';
import { GoogleConfig } from '../../../Configs';
import { authService } from '../../../Services';

const { Button } = Form;

const GoogleSignIn = () => {
  const history = useHistory();

  return (
    <GoogleLogin
      clientId={GoogleConfig.clientId}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick}>
          Login with Google <FontAwesomeIcon icon={faGoogle} />
        </Button>
      )}
      onSuccess={async (response) => {
        await authService.googleLogin({ idToken: (response as GoogleLoginResponse).tokenId }, history);
      }}
      onFailure={(err) => {
        console.error(err);
      }}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignIn;
