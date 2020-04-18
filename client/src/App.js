import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { connect } from 'react-redux';
import loginStatus from './actions/loginStatus';
import NewProject from './NewProject';

class App extends Component {

  render() {
    this.props.loginStatus()
    return (
      <div className="App">
        <Router>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={NewProject} />
        </Router>
      </div>
    );
  }
}

export default connect(null,{loginStatus})(App);
