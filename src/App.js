import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-up/sign-in-up.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          component={HomePage}
          path='/'
          exact
        />
        <Route
          component={ShopPage}
          path='/shop'
        />
        <Route
          component={SignInAndUpPage}
          path='/signin'
        />
      </Switch>
    </div>
  );
}

export default App;
