import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Overlay } from './Layout';
import Navigation from './Navigation';
import Router from './Router';
import ReactNotification from 'react-notifications-component';

import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.compat.css';

const App: React.FC = () => (
  <>
    <ReactNotification />
    <BrowserRouter>
      <Overlay>
        <Navigation />
        <Router />
      </Overlay>
    </BrowserRouter>
  </>
);

export default App;
