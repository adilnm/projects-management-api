import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
