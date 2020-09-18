import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from '../src/components/header/header.component'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact component={HomePage} path='/' />
        <Route component={ShopPage} path='/shop' />
        <Route component={SignInAndSignUpPage} path='/signin' />
      </Switch>
    </div>
  );
}

export default App;
