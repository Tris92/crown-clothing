import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-up/sign-in-up.component';
import {setCurrentUser} from './redux/user/user.actions';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        }
    setCurrentUser({userAuth});
    console.log('auth success');
    })
  }

  componentWillUnmount() {    
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          component={HomePage}
          path='/'
        />
        <Route
          component={ShopPage}
          path='/shop'
        />
        <Route
          exact
          render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndUpPage />)}
          path='/signin'
        />
      </Switch>
    </div>
  )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
