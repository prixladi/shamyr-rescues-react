import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { authorityManager } from '../clients';
import { Overlay } from '../Layout';
import { _Home, _Places, _SignIn, _Profile } from './Routes';

const { Navigation } = Overlay;

const Nav: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoggedIn(authorityManager.isUserLoggedIn());
  }, [location]);

  return (
    <Navigation>
      <Navigation.Item text="Home" id="home" path={_Home} />
      <Navigation.Item text="Places" id="places" path={_Places} />
      {loggedIn ? (
        <Navigation.Item text="Profile" id="profile" path={_Profile} />
      ) : (
        <Navigation.Item text="Sign in" id="signIn" path={_SignIn} />
      )}
    </Navigation>
  );
};

export default Nav;
