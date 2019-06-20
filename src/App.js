import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Home from './components/layout/Home';
import Login from './components/layout/Forms/Login';
import Signup from './components/layout/Forms/Signup';
import Profile from './components/layout/Profile';
import Footer from './components/layout/Footer/Footer';
import './App.css';

class App extends Component {
  render (){
    return (
      <Router>
      <div>
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
               <Home />
          </React.Fragment>
        )}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Footer />
      </div>
      </Router>
    );
  }

}

export default App;