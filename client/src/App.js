import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { connect } from 'react-redux';
import loginStatus from './actions/loginStatus';
import NewProject from './NewProject';
import projects from './actions/projects';
import Logout from './Logout';
import ProjectShow from './ProjectShow';
import myprojects from './actions/myprojects';

class App extends Component {

  render() {
    this.props.loginStatus()
    this.props.projects()
    this.props.myprojects()
    return (
      <div className="App">
        <Router>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={NewProject} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path={"/projects/:projectId"} component={ProjectShow}/>

        </Router>
      </div>
    );
  }
}
const mstp=(state)=>{
  return{
      loggedIn:state.user.logged_in
  }
}
export default connect(mstp,{loginStatus, projects, myprojects})(App);
