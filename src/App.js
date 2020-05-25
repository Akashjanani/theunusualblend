import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import AppBody from './components/AppBody';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <AppBody />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
