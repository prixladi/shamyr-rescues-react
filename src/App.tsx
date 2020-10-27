import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Overlay } from './Layout';
import Navigation from './Navigation';
import Router from './Router';

const App = () => (
  <BrowserRouter>
    <Overlay>
      <Navigation />
      <Router />
    </Overlay>
  </BrowserRouter>
);

export default App;
