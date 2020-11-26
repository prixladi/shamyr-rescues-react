import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  _Home,
  _Places,
  _Place,
  _SignIn,
  _Register,
  _ForgottenPassword,
  _Profile,
  _PlaceNew,
  _PlaceEdit,
  _PlaceExampleNew,
  _PlaceExample,
  _ForgottenPasswordSent,
  _PasswordReset,
  _AccountVerify,
  _AccountVerifySent,
  _AccountVerified,
} from './Navigation/Routes';

import {
  Home,
  Places,
  Place,
  Login,
  Register,
  ForgottenPassword,
  ForgottenPasswordSent,
  PasswordReset,
  Profile,
  NewPlace,
  EditPlace,
  PlaceExampleNew,
  PlaceExample,
  AccountVerify,
  AccountVerifySent,
  AccountVerified,
} from './Pages';

const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to={_Home} />
    </Route>

    <Route path={_Home} exact>
      <Home />
    </Route>

    <Route path={_PlaceNew} exact>
      <NewPlace />
    </Route>

    <Route path={_PlaceExample} exact>
      <PlaceExample />
    </Route>

    <Route path={_PlaceEdit(':placeId')} exact>
      <EditPlace />
    </Route>

    <Route path={_Place(':placeId')} exact>
      <Place />
    </Route>

    <Route path={_Places} exact>
      <Places />
    </Route>

    <Route path={_PlaceExampleNew} exact>
      <PlaceExampleNew />
    </Route>

    <Route path={_SignIn} exact>
      <Login />
    </Route>

    <Route path={_Register} exact>
      <Register />
    </Route>

    <Route path={_PasswordReset} exact>
      <PasswordReset />
    </Route>

    <Route path={_ForgottenPassword} exact>
      <ForgottenPassword />
    </Route>

    <Route path={_ForgottenPasswordSent} exact>
      <ForgottenPasswordSent />
    </Route>

    <Route path={_AccountVerified} exact>
      <AccountVerified />
    </Route>

    <Route path={_AccountVerify} exact>
      <AccountVerify />
    </Route>

    <Route path={_AccountVerifySent} exact>
      <AccountVerifySent />
    </Route>

    <Route path={_Profile} exact>
      <Profile />
    </Route>
  </Switch>
);

export default Router;
