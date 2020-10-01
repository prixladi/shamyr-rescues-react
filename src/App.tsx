import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Overlay, Content, Navigation } from './Layout';

import Home from './Pages/Home';

const App = () => (
  <BrowserRouter>

    <Overlay>
      <Navigation>
        <Navigation.Item text="Home" id="home" path="/home" />
        <Navigation.Item text="Places" id="places" path="/places" />
        <Navigation.Item text="Contact" id="contact" path="/contact" />
      </Navigation>

      <Content>
      <Switch>
        <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
        </Switch>
        
      </Content>
    </Overlay>
  </BrowserRouter>
);

export default App;
