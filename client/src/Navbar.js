import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        const {loggedIn}=this.props
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link className="navbar-brand" to="/">PROJECTS MANAGEMENTS</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new">Create a Post</Link>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {!loggedIn? <Link className="nav-link" to="/login">Login</Link> : null}
                        </li>
                        <li className="nav-item">
                            {!loggedIn ? <Link className="nav-link" to="/signup">Signup</Link> : null}
                        </li>
                        <li className="nav-item">
                            {loggedIn?<Link className="nav-link" to="/logout">Logout</Link>:null}
                        </li>
                        
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}

const mstp=(state)=>{
    return{
        loggedIn:state.user.login
    }
}

export default connect(mstp)(Navbar)
