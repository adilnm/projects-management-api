import React, { Component } from 'react'
import { connect } from 'react-redux';
import auth from './actions/auth';
import Navbar from './Navbar';

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.auth(this.state)
        this.props.history.push('/')
    }
    render() {
        const {loggedin,history}=this.props
        if (loggedin===undefined) {
            return <div></div>
        }
        return (
            <div>
                {loggedin?history.push('/'):null}
                <Navbar/>
                <h1>Signup</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="Name" /><br />
                    <input onChange={this.handleChange} type="text" name="username" placeholder="Username" /><br />
                    <input onChange={this.handleChange} type="text" name="email" placeholder="Email" /><br />
                    <input onChange={this.handleChange} type="text" name="password" placeholder="password" /><br />
                    <input type="submit" name="" id="" />
                </form>
            </div>
        )
    }
}

const mstp=state=>{
    return{
        loggedin:state.user.logged_in
    }
}
export default connect(mstp, { auth })(Signup)