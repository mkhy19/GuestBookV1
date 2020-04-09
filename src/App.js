import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ValidatedLoginForm from './components/Login/ValidatedLoginForm';
import SignUpForm from './components/SignUp/SignUpForm';
import MessageDashboard from './components/Messages/MessageDashboard';

class App extends Component {

  render() {
    return ( 
      <Router>
        <div className="App">
          <h1>GuestBook App with Hooks</h1>
          <ul className="signInUp">
            <li className="signLists">
              <Link className="signLists" to={"/sign-in"}>Login</Link>
            </li>
            <li className="signLists">
              <Link className="signLists" to={"/sign-up"}>Sign up</Link>
            </li>
            <li className="signLists">
              <Link className="signLists" to={"/send-message"}>Messages</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path='/' component={ValidatedLoginForm} />
            <Route path="/sign-in" component={ValidatedLoginForm} />
            <Route path="/sign-up" component={SignUpForm} />
            <Route path="/send-message" component={MessageDashboard} />

          </Switch>
        </div>
      </Router>

    );
  }
}

export default App; 