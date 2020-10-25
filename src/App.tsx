import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Overlay } from './Layout';
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
} from './Navigation/Routes';
import {
  Home,
  Places,
  Place,
  Login,
  Register,
  ForgottenPassword,
  Profile,
  NewPlace,
  EditPlace,
  PlaceExampleNew,
  PlaceExample,
} from './Pages';
import Navigation from './Navigation';

const { Content } = Overlay;

const App = () => (
  <BrowserRouter>
    <Overlay>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <Redirect to={_Home} />
        </Route>

        <Route path={_Home} exact>
          <Content>
            <Home />
          </Content>
        </Route>

        <Route path={_PlaceNew} exact>
          <Content hideFooter>
            <NewPlace />
          </Content>
        </Route>

        <Route path={_PlaceExample} exact>
          <Content>
            <PlaceExample />
          </Content>
        </Route>

        <Route path={_PlaceEdit(':placeId')} exact>
          <Content hideFooter>
            <EditPlace />
          </Content>
        </Route>

        <Route path={_Place(':placeId')} exact>
          <Content>
            <Place />
          </Content>
        </Route>

        <Route path={_Places} exact>
          <Content>
            <Places />
          </Content>
        </Route>

        <Route path={_PlaceExampleNew} exact>
          <Content hideFooter>
            <PlaceExampleNew />
          </Content>
        </Route>

        <Route path={_SignIn} exact>
          <Content hideFooter>
            <Login />
          </Content>
        </Route>

        <Route path={_Register} exact>
          <Content hideFooter>
            <Register />
          </Content>
        </Route>

        <Route path={_ForgottenPassword} exact>
          <Content hideFooter>
            <ForgottenPassword />
          </Content>
        </Route>

        <Route path={_Profile} exact>
          <Content>
            <Profile />
          </Content>
        </Route>
      </Switch>
    </Overlay>
  </BrowserRouter>
);

export default App;
