import React, { Component } from 'react'
import { connect } from 'react-redux';
import login from './actions/login';

class Login extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }

    componentDidMount=()=>{
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.login(this.state)
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="username" placeholder="Username"/><br/>    
                    <input onChange={this.handleChange} type="text" name="password" placeholder="password"/><br/>    
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null,{login})(Login)