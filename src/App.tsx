import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Overlay } from './Layout';
import Home from './Pages/Home';
import Places from './Pages/Places';
import Place from './Pages/Place';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgottenPassword from './Pages/ForgottenPassword';
import { _Home, _Places, _Place, _SignIn, _Register, _ForgottenPassword } from './Routes';

const { Navigation, Content } = Overlay;

const App = () => (
  <BrowserRouter>
    <Overlay>
      <Navigation>
        <Navigation.Item text="Home" id="home" path={_Home} />
        <Navigation.Item text="Places" id="places" path={_Places} />
        <Navigation.Item text="Sign in" id="signIn" path={_SignIn} />
      </Navigation>

      <Switch>
        <Route path="/" exact>
          <Redirect to={_Home} />
        </Route>

        <Route path={_Home} exact>
          <Content>
            <Home />
          </Content>
        </Route>

        <Route path={_Places} exact>
          <Content>
            <Places />
          </Content>
        </Route>

        <Route path={_Place} exact>
          <Content>
            <Place />
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
      </Switch>
    </Overlay>
  </BrowserRouter>
);

export default App;
