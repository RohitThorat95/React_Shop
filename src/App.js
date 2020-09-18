import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from '../src/components/header/header.component'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact component={HomePage} path='/' />
          <Route component={ShopPage} path='/shop' />
          <Route component={SignInAndSignUpPage} path='/signin' />
        </Switch>
      </div>
    );
  }
}

export default App;
